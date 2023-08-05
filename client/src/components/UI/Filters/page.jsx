import { Container } from '@/components/Container'
import { FILTERS_LIST } from '@/consts/filters'
import useFilters from '@/hooks/useFilters'
import { FaCartShopping, FaChartColumn, FaFilter } from 'react-icons/fa6'

export function Filters({ products }) {
  const { filteredProducts, category, setUpdateCategory, allCategory } =
    useFilters({
      products,
    })

  const handleChangeCategory = (event) => {
    if (event.target.value === category) return
    setUpdateCategory(event.target.value)
  }

  return (
    <Container>
      <div
        className={
          'mt-[160px] w-full flex flex-col-reverse md:flex-row  justify-between items-center	m-auto gap-4 p-4'
        }
      >
        <form className="flex w-max">
          <label>
            <select
              name="category"
              onChange={handleChangeCategory}
              className="border border-slate-400 p-2 rounded-md backdrop-blur w-[199px] child:bg-secondary"
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
            <span>{filteredProducts?.length}</span>
            <FaFilter />
          </p>
          <p title="All the Products">
            <span>{products?.length}</span>
            <FaChartColumn />
          </p>
          <p title="Products in the cart">
            <span>{filteredProducts?.length}</span>
            <FaCartShopping />
          </p>
        </div>
      </div>
    </Container>
  )
}
