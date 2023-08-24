import { ProductModel } from '../models/database/products.model.js'
// import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class ProductController {
    // [x]
    static async getAll(req, res) {
        const page = parseInt(req.query.page) || 1
        const perPage = parseInt(req.query.results) || 10
        const category = parseInt(req.query.category) || 0
        try {
            const products = await ProductModel.getAll({ category, page, perPage })
            console.log('res => ', { products })
            res.json({ ...products })
        } catch (e) {
            res.json({ success: false, status: 500, message: e.message })
        }
    }

    // [x]
    static async getById(req, res) {
        const { id } = req.params
        try {
            const product = await ProductModel.getById({ id })
            if (product?.length !== 0) return res.json(product)
            res.status(404).json(
                [
                    {
                        status: 404,
                        results: null,
                        message: `No products were found for this search id : ${id}`
                    }
                ]
            )
        } catch (e) {
            res.json({ success: false, status: 500, message: e.message })
        }
    }

    static async create(req, res) {
        // const result = validateMovie(req.body)
        const result = []
        if (!result.success) {
            // 422 Unprocessable Entity
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newMovie = await ProductModel.create({ input: result.data })

        res.status(201).json(newMovie)
    }

    // [x]
    static async delete(req, res) {
        const { id } = req.params
        try {
            const result = await ProductModel.delete({ id })
            if (result === false) {
                return res.status(404).json([
                    {
                        status: 404,
                        success: false,
                        message: `No products were found for this search id : ${id}`
                    }
                ]
                )
            }
            return res.status(202).json(
                [
                    {
                        success: true,
                        message: `Product deleted by ID : ${id}`
                    }
                ]
            )
        } catch (e) {
            res.json({ success: false, status: 500, message: e.message })
        }
    }

    static async update(req, res) {
        // const result = validatePartialMovie(req.body)
        const result = []
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const { id } = req.params

        const updatedMovie = await ProductModel.update({ id, input: result.data })

        return res.json(updatedMovie)
    }
}
