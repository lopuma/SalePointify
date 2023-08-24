'use client'
import { Container } from '@/components/Container'
import { DevelopmentFooter } from '@/components/DevelopmentFooter/page'
import { Cart } from '@/components/UI/Cart/Cart'
import { Filters } from '@/components/UI/Filters/Filters'
import Products from '@/components/UI/Products/Products'
import config from '@/config'

function NewOrder() {
  return (
    <>
      <Filters />
      <Container className="mt-[140px] w-full flex flex-col-reverse md:flex-row place-content-center gap-4">
        <Products />
        <Cart />
      </Container>
      {config.IS_DEVELOPMENT && <DevelopmentFooter />}
    </>
  )
}

export default NewOrder
