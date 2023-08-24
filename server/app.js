import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { HOST, PORT } from './config.js'
import { routerCategories } from './routes/categories.router.js'
import routerCompany from './routes/company/Company.router.api.js'
import routerIndex from './routes/index/index.router.api.js'
import { routerProducts } from './routes/products.router.js'
import { startServer } from './utils.js'
const app = express()

// TODO - Middlelware
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')
app.use(morgan('dev'))

// TODO - Router
app.use('/api', routerIndex)
app.use('/api/company', routerCompany)
// app.use('/api/locations/provinces', routerProvinces)
// app.use('/api/locations/populations', routerPopulations)
// app.use('/api/accounts', routerAccounts)
app.use('/api/products', routerProducts)
app.use('/api/categories', routerCategories)

// TODO - NOT FOUND
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found'
  })
})

// TODO - New PORT
startServer(app, PORT, HOST)
