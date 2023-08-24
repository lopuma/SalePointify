import { ProductModel } from '../models/database/products.model.js'

export class CategoriesController {
    // [x]
    static async getAll(req, res) {
        try {
            const category = await ProductModel.getAllCategory()
            res.json({ ...category })
        } catch (e) {
            res.json({ success: false, status: 500, message: e.message })
        }
    }
}
