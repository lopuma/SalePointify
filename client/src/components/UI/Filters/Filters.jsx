import { Container } from '@/components/Container'
import { FILTERS_LIST } from '@/consts/filters'
import { useFilters } from '@/hooks/useFilters'
import useProducts from '@/hooks/useProducts'
import { useCartStore } from '@/store/storeCart'
import { usePageStore } from '@/store/storePage'
import { FaCartShopping, FaChartColumn, FaFilter } from 'react-icons/fa6'

export function Filters() {
  const { allCategory, products, isError, pagination } = useProducts()
  const { setIsPage } = usePageStore()
  const { isCart } = useCartStore()
  const { filterProducts, category, setUpdateCategory } = useFilters()
  const filteredProducts = filterProducts(products)
  const handleChangeCategory = (event) => {
    if (event.target.value === category) return
    setUpdateCategory(event.target.value)
    setIsPage(1)
  }

  return (
    <Container>
      <div
        className={
          'fixed top-[80px] left-0 z-20 w-full flex flex-col-reverse md:flex-row  justify-between items-center	m-auto gap-4 p-4 backdrop-blur-md backdrop-saturate-200'
        }
      >
        <form className="flex w-max">
          <label>
            <select
              name="category"
              id="select-category"
              onChange={handleChangeCategory}
              className="border border-slate-400 p-2 rounded-md backdrop-blur w-[199px] child:bg-secondary"
              value={category}
              disabled={isError}
            >
              <option value={FILTERS_LIST.ALL_PRODUCTS_FILTER}>
                {FILTERS_LIST.ALL_PRODUCTS_FILTER.toUpperCase()}
              </option>
              {allCategory?.map((category) => (
                <option key={category} value={category}>
                  {category.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </form>

        <div
          className={
            'flex gap-6 child:text-foreground child:flex child:items-center child:text-lg child:gap-2 child:opacity-[0.8]'
          }
        >
          <p title="Leaked Products">
            <span>{filteredProducts?.length || 0}</span>
            <FaFilter />
          </p>
          <p title="Total Products">
            <span>{pagination?.total || 0}</span>
            <FaChartColumn />
          </p>
          <p title="Products in the Cart">
            <span>{isCart || 0}</span>
            <FaCartShopping />
          </p>
        </div>
      </div>
    </Container>
  )
}
