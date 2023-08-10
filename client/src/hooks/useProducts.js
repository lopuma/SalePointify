import { useAddProducts, useFetchProducts } from '@/services/products'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'

const usePage = () => {
  const searchParams = useSearchParams()
  const page = useRef('1')
  page.current = searchParams.get('page')
  if (!page.current) return '1'
  return page.current
}

function useProducts() {
  const page = usePage()
  const mutation = useAddProducts()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', page],
    queryFn: useFetchProducts,
    staleTime: Infinity,
  })

  return {
    products: data?.products,
    pagination: data?.pagination,
    isError,
    isLoading,
    allCategory: data?.allCategory,
    mutation,
  }
}

export default useProducts
