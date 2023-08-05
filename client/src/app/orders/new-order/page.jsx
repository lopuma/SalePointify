'use client'
import { Container } from '@/components/Container'
import { Cart } from '@/components/UI/Cart/page'
import { Filters } from '@/components/UI/Filters/page'
import Products from '@/components/UI/Products/Products'
import { useProducts } from '@/hooks/useProducts'

function NewOrder() {
  const { products, pagination } = useProducts()
  return (
    <>
      <Filters products={products} />
      <Container className="w-full flex flex-col-reverse md:flex-row place-content-center m-auto gap-4 p-4">
        <Products pagination={pagination} products={products} />
        <Cart />
      </Container>
    </>
  )
}

export default NewOrder
