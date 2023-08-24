const config = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
  IS_DEVELOPMENT: process.env.NODE_ENV !== 'production'
}

export default config
