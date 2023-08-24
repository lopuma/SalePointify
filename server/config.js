import { config } from 'dotenv'
import { resolve } from 'path'
if (process.env.NODE_ENV === 'development') {
  config({
    path: resolve(process.env.NODE_ENV + '.env')
  })
} else {
  config({
    path: resolve('.env')
  })
}

export const PORT = process.env.PORT || 3001
export const HOST = process.env.HOST || 'localhost'
export const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres'
export const POSTGRES_PORT = process.env.POSTGRES_PORT || 5432
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'postgres'
export const POSTGRES_DB = process.env.POSTGRES_DB || 'postgres'
export const POSTGRES_SERVER = process.env.POSTGRES_SERVER || 'localhost'
