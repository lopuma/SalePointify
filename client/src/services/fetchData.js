import config from '@/config'
import axios from 'axios'
const API_BASE_URL = config.API_BASE_URL

const checkUrlAvailability = async (url) => {
  try {
    const response = await axios.head(url, { timeout: 3000 })
    return response.status === 200
  } catch {
    throw new Error(
      'The requested failed with status code 404, please verify the address and try again later.'
    )
  }
}

const getSuspender = (promise) => {
  let status = 'pending'
  let response
  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res.data
    },
    (err) => {
      status = 'error'
      response = err
    }
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw new Error(response)
      default:
        return response
    }
  }

  return { read }
}

export const fetchData = async (url) => {
  try {
    const _URL = `${API_BASE_URL}${url}`
    const isAvailable = await checkUrlAvailability(_URL)
    if (!isAvailable) {
      throw new Error(`The URL ${_URL} is not available`)
    }
    const promise = axios.get(_URL)
    return getSuspender(promise)
  } catch (e) {
    throw new Error(e)
  }
}
