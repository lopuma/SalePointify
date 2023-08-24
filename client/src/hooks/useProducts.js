import { useFilters } from '@/hooks/useFilters'
import { useAddProducts, useFetchProducts } from '@/services/products'
import { usePageStore } from '@/store/storePage'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useFetchCategories = () => {
  return axios.get('http://192.168.1.142:3001/api/categories')
}
function useProducts() {
  const { isPage: page } = usePageStore()
  const { category } = useFilters()
  const mutation = useAddProducts()
  const { data, isLoading, isError, error, isFetching, isPreviousData } =
    useQuery({
      queryKey: ['products', category, page],
      queryFn: useFetchProducts,
      keepPreviousData: true,
      staleTime: Infinity
    })
  const { data: allCategory } = useQuery({
    queryKey: ['categories'],
    queryFn: useFetchCategories,
    staleTime: Infinity
  })
  return {
    products: data?.products,
    pagination: data?.pagination,
    isError,
    error,
    isFetching,
    isPreviousData,
    isLoading,
    allCategory: allCategory?.data?.results?.toSorted(),
    mutation
  }
}

export default useProducts
