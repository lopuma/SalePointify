import { useContext } from 'react'

import { ProductsContext } from '@/context/Products/ProductsContext'

export function useProducts() {
  const { products, pagination, error, loading } = useContext(ProductsContext)
  if (products === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return { products, pagination, error, loading }
}
