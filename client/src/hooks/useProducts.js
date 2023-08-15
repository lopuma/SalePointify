import { useAddProducts, useFetchProducts } from '@/services/products'
import { usePageStore } from '@/store/storePage'
import { useQuery } from '@tanstack/react-query'
import { useFilters } from './useFilters'

function useProducts() {
  const { isPage: page } = usePageStore()
  const { category } = useFilters()
  const mutation = useAddProducts()
  const { data, isLoading, isError, error, isFetching, isPreviousData } =
    useQuery({
      queryKey: ['products', category, page],
      queryFn: useFetchProducts,
      keepPreviousData: true,
      staleTime: Infinity,
    })
  return {
    products: data?.products,
    pagination: data?.pagination,
    isError,
    error,
    isFetching,
    isPreviousData,
    isLoading,
    allCategory: data?.allCategory.toSorted(),
    mutation,
  }
}

export default useProducts
