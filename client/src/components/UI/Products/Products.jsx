import { ErrorComponent } from '@/components/Errors/page'
import { CardLoader } from '@/components/Loaders/CardLoader'
import { Pagination } from '@/components/Pagination/page'
import { ProductItems } from '@/components/UI/Products/ProductItems'
import { useFilters } from '@/hooks/useFilters'
import useProducts from '@/hooks/useProducts'
function ListProducts({ products }) {
  return (
    <div className="grid grid-cols-fluid gap-6 ms:grid-cols-4 p-2">
      {products?.map((product) => (
        <ProductItems product={product} key={product.id} />
      ))}
    </div>
  )
}

function NoProductsResults() {
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <div className="text-center">
        <h5 className="text-2xl font-bold">Uh Oh</h5>
        <p className="font-light text-neutral-500 mt-2">
          Something went wrong! : no products were found for this search
        </p>
      </div>
    </div>
  )
}

function Products() {
  const { pagination, isLoading, isError, products } = useProducts()
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  console.log({ pagination, isLoading, isError, filteredProducts })
  return (
    <>
      <article className="w-full h-full grow rounded-md border border-gray-300 shadow-md flex flex-col place-content-center px-4">
        <Pagination pagination={pagination} />
        <ListProducts products={filteredProducts} />
        {isLoading && <CardLoader count={16} />}
        {isError && (
          <ErrorComponent
            customError={{ message: isError }}
            className="rounded-md"
          />
        )}
        {!isLoading && !isError && filteredProducts?.length === 0 && (
          <NoProductsResults />
        )}
        {/* {!isLoading && !isError && filteredProducts.length >= 0 && (
          <ListProducts products={filteredProducts} />
        )} */}
        <Pagination pagination={pagination} />
      </article>
    </>
  )
}

export default Products
