import { Router } from 'express'
import { CategoriesController } from '../controllers/categories.controller.js'

export const routerCategories = Router()

// [x]
routerCategories.get('/', CategoriesController.getAll)
