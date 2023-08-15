import pkg from 'pg'
const { Pool } = pkg

const connectionString =
  'postgresql://postgres:Dopracau4000lopo@localhost:5432/salepointify'

export const pool = new Pool({
  connectionString,
})

// Conect DB
try {
  await pool.connect()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
