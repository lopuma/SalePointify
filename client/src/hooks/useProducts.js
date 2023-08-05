import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { searchProducts } from '../services/products'

export function useProducts() {
  const [searchParams] = useSearchParams()
  const [errors, setError] = useState(null)
  let page = '1'
  try {
    page = searchParams[1]
  } catch (error) {}

  const getProducts = async ({ queryKey }) => {
    try {
      setError(null)
      const [products, pagination] = await searchProducts({ queryKey })
      return [products, pagination]
    } catch (error) {
      setError(error)
    }
  }

  const { isLoading, isError, data } = useQuery(['products', page], getProducts)

  if (
    isError ||
    (errors && data === undefined) ||
    data === null ||
    data === undefined
  ) {
    try {
      const customError = {
        status: 404,
        label: '[ Not Found ]',
        message: 'The resource requested could not be found on this server.',
      }
      return { customError }
    } catch (error) {}
    // return ( customError = {
    //   status: 404,
    //   label: '[ Not Found ]',
    //   message: 'The resource requested could not be found on this server.',
    // })
  }

  return { products: data[0], pagination: data[1] }
}
