import { FILTERS_LIST } from '@/consts/filters'
import { storeFilters } from '@/store/storeFilters'

function useFilters({ products }) {
  const { category, setUpdateCategory } = storeFilters()
  const filterProducts = (products) => {
    return products?.filter((product) => {
      return (
        category === FILTERS_LIST.ALL_PRODUCTS_FILTER ||
        product.category === category
      )
    })
  }
  const categories = () => {
    const allCategories = products?.map(({ category }) => category)
    if (allCategories === undefined) {
      return null
    }

    const uniqueCategories = new Set([...allCategories])
    const uniqueCategoriesArray = [...uniqueCategories]
    return uniqueCategoriesArray
  }

  const allCategory = categories()

  const filteredProducts = filterProducts(products)
  return {
    category,
    setUpdateCategory,
    filteredProducts,
    allCategory,
  }
}

export default useFilters
