import { FILTERS_LIST } from '@/consts/filters'
import { storeFilters } from '@/store/storeFilters'
export function useFilters() {
  const { category, setUpdateCategory } = storeFilters()
  const filterProducts = (products) => {
    return products?.filter((product) => {
      return (
        category === FILTERS_LIST.ALL_PRODUCTS_FILTER ||
        product?.category === category
      )
    })
  }
  return { category, filterProducts, setUpdateCategory }
}
