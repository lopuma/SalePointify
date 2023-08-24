import pkg from 'pg'
import { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_SERVER, POSTGRES_USER } from '../../config.js'
const { Pool } = pkg
const connectionString = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_SERVER}:${POSTGRES_PORT}/${POSTGRES_DB}`

const pool = new Pool({
  connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})

async function connect() {
  try {
    return pool.connect()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    await pool.end()
  }
}

export class ProductModel {
  // [x]
  static async getAll({ category, page, perPage }) {
    const client = await connect()
    console.log({ category, page, perPage })
    try {
      await client.query('BEGIN')
      // TODO total de products por filters
      let countQuery =
        'SELECT COUNT(*) as total FROM products p'
      // TODO pagination
      let query = `
      WITH filtered_products AS (
        SELECT p.*, c.name as category
        FROM products p
        INNER JOIN categories c
        ON c.idCategory=p.idCategory
      )
      SELECT *
      FROM filtered_products
      ORDER BY name ASC
      OFFSET $1::integer
      LIMIT $2::integer
    `
      if (category > 0) {
        query = `
        WITH filtered_products AS (
          SELECT p.*, c.name as category
          FROM products p
          INNER JOIN categories c
          ON c.idCategory=p.idCategory
          WHERE p.idCategory=$1::integer
        )
        SELECT *
        FROM filtered_products
        ORDER BY name ASC
        OFFSET $2::integer
        LIMIT $3::integer
      `
        countQuery =
          'SELECT COUNT(*) as total FROM products p WHERE p.idCategory=$1::integer'
      }
      const totalCount = await client.query(countQuery, category > 0 && [category])
      const total = parseInt(totalCount?.rows[0].total, 10)
      const offset = (page - 1) * perPage
      const res = await client.query(query, category > 0 ? [category, offset, perPage] : [offset, perPage])
      const totalPages = Math.ceil(total / perPage)
      const responseObject = {
        success: res?.rows?.length > 0,
        page,
        per_page: perPage,
        total,
        total_pages: totalPages,
        results: res?.rows?.length > 0 ? res?.rows : ['No products were found for this search']
      }
      await client.query('COMMIT')
      return { ...responseObject }
    } catch (e) {
      await client.query('ROLLBACK')
      throw new Error('Internal server ' + e)
    } finally {
      client.release()
    }
  }

  // [x]
  static async getAllCategory() {
    const client = await connect()
    try {
      await client.query('BEGIN')
      const categoryQuery =
        'SELECT * FROM categories'
      const res = await client.query(categoryQuery)
      const responseObject = {
        success: res?.rows?.length > 0,
        results: res?.rows?.length > 0 ? res?.rows : ['No products were found for this search']
      }
      await client.query('COMMIT')
      return { ...responseObject }
    } catch (e) {
      await client.query('ROLLBACK')
      throw new Error('Internal server ' + e)
    } finally {
      client.release()
    }
  }

  // [x]
  static async getById({ id }) {
    const client = await connect()
    try {
      await client.query('BEGIN')
      const queryId = 'SELECT p.* FROM products p WHERE p._id = $1::uuid'
      const result = await client.query(queryId, [id])
      return result.rows
    } catch (e) {
      await client.query('ROLLBACK')
      throw new Error('Internal server ' + e)
    } finally {
      client.release()
    }
  }

  static async create({ input }) {
    const db = await connect()

    const { insertedId } = await db.insertOne(input)

    return {
      id: insertedId,
      ...input
    }
  }

  // [x]
  static async delete({ id }) {
    const client = await connect()
    try {
      await client.query('BEGIN')
      const queryId = 'DELETE FROM products WHERE _id = $1::uuid'
      const { rowCount } = await client.query(queryId, [id])
      return rowCount > 0
    } catch (e) {
      await client.query('ROLLBACK')
      throw new Error('Internal server ' + e)
    } finally {
      client.release()
    }
  }

  static async update({ id, input }) {
    const db = await connect()
    const objectId = id

    const { ok, value } = await db.findOneAndUpdate({ _id: objectId }, { $set: input }, { returnNewDocument: true })

    if (!ok) return false

    return value
  }
}
