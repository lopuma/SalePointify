import { Router } from 'express'
import { ProductController } from '../controllers/products.controller.js'

export const routerProducts = Router()

// [x]
routerProducts.get('/', ProductController.getAll)
// [x]
routerProducts.get('/:id', ProductController.getById)
// [x]
routerProducts.delete('/:id', ProductController.delete)
