import config from '@/config'
import axios from 'axios'
const API_BASE_URL = config.API_BASE_URL

const checkUrlAvailability = async (url) => {
  try {
    const response = await axios.head(url, { timeout: 3000 })
    return response.status === 200
  } catch {
    console.error(
      'The requested URL could not be accessed. Please verify the address and try again later.'
    )
    return false
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
        return {
          message:
            'There was a problem with the axios request, please review API URL',
          status: 404,
          response,
        }
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
      console.error(`The URL ${_URL} is not available`)
      return
    }
    const promise = axios.get(_URL)
    return getSuspender(promise)
  } catch (e) {
    console.error('There was a problem with the axios request: ' + e.message)
    throw new Error('There was a problem with the axios request: ' + e.message)
  }
}
