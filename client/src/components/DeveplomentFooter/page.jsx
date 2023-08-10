import { useFilters } from '@/hooks/useFilters'
import useProducts from '@/hooks/useProducts'
import styles from './dev.module.css'

export function DeveplomentFooter() {
  const { isError, isLoading, products } = useProducts()
  const { category, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <footer className={`${styles.footer}`}>
      {JSON.stringify({ category }, null, 2)}
      {isLoading ? (
        <p>Cargando...</p>
      ) : isError ? (
        <p>{JSON.stringify(isError)}</p>
      ) : (
        <p>Products : {JSON.stringify(filteredProducts?.length, null, 2)}</p>
      )}
      {}
    </footer>
  )
}
