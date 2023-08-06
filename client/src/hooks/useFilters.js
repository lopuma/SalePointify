import { FILTERS_LIST } from '@/consts/filters'
import { useProducts } from '@/hooks/useProducts'
import { storeFilters } from '@/store/storeFilters'

function useFilters() {
  const { products } = useProducts()
  const { category, setUpdateCategory } = storeFilters()
  const filterProducts = (products) => {
    return products?.filter((product) => {
      return (
        category === FILTERS_LIST.ALL_PRODUCTS_FILTER ||
        product.category === category
      )
    })
  }

  const filteredProducts = filterProducts(products)
  return {
    category,
    setUpdateCategory,
    filteredProducts,
  }
}

export default useFilters
