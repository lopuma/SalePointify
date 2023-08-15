import cors from 'cors'
import express, { json } from 'express'
import morgan from 'morgan'
import { HOST, PORT } from './config.js'
import routerAccounts from './routes/api/accounts/accounts.router.api.js'
import routerCompany from './routes/api/company/Company.router.api.js'
import routerIndex from './routes/api/index/index.router.api.js'
import routerPopulations from './routes/api/locations/Populations.router.api.js'
import routerProvinces from './routes/api/locations/Provinces.router.api.js'
import routerProducts from './routes/api/products/products.router.api.js'
import { startServer } from './utils.js'
const app = express()
app.disable('x-powered-by')
// 1 - Usamos Cors
// app.use(cors(configCors.cors.server));
app.use(cors())

// 2 - midlelware
app.use(morgan('dev'))

// 3 - Manejar JSON
app.use(json())

// 4 - Router
app.use('/api', routerIndex)
app.use('/api/company', routerCompany)
app.use('/api/locations/provinces', routerProvinces)
app.use('/api/locations/populations', routerPopulations)
app.use('/api/accounts', routerAccounts)
app.use('/api/products', routerProducts)

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  })
})

// TODO new port
startServer(app, PORT, HOST)
