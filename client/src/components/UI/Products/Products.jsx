import { CardLoader } from '@/components/Loaders/CardLoader'
import { Pagination } from '@/components/Pagination/page'
import { ProductItems } from '@/components/UI/Products/ProductItems'
import useFilters from '@/hooks/useFilters'

function ListProducts({ products }) {
  return (
    <div className="grid grid-cols-fluid gap-4 my-4">
      {products?.map((product) => (
        <ProductItems product={product} key={product.id} />
      ))}
    </div>
  )
}

function NoProductsResults() {
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center  ">
      <div className="text-center">
        <h5 className="text-2xl font-bold">Uh Oh</h5>
        <p className="font-light text-neutral-500 mt-2">
          Something went wrong! : no products were found for this search
        </p>
      </div>
    </div>
  )
}

function Products({ pagination, products }) {
  const { filteredProducts } = useFilters({ products })
  const hasProducts = filteredProducts === undefined
  const isEmptyProducts =
    Array.isArray(filteredProducts) && filteredProducts.length === 0
  return hasProducts ? (
    <CardLoader count={16} />
  ) : (
    <>
      <article className="w-full h-full grow rounded-md border border-gray-300 shadow-md flex place-content-center">
        <div className="w-full px-4 grid grid-flow-fluid">
          <Pagination pagination={pagination} />
          {isEmptyProducts ? (
            <NoProductsResults />
          ) : (
            <ListProducts products={filteredProducts} />
          )}
          <Pagination pagination={pagination} />
        </div>
      </article>
    </>
  )
}

export default Products
