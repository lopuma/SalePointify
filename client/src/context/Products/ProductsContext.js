'use client'
import { fetchData } from '@/services/fetchData'

import { createContext, useEffect, useState } from 'react'
const apiDataProducts = fetchData('/products')

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchProducts() {
      console.log('fetchProducts')
      setLoading(true)
      try {
        const response = (await apiDataProducts).read()
        const pagination = {
          page: response.page,
          perPage: response.per_page,
          total: response.total,
          totalPages: response.total_pages,
        }
        const mappedProducts = response.results.map((product) => {
          return {
            id: product._id,
            title: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            active: product.active,
          }
        })

        setError(null)
        setPagination(pagination)
        setProducts(mappedProducts)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const productsValue = {
    products,
    pagination,
    loading,
    error,
  }

  return (
    <ProductsContext.Provider value={productsValue}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
