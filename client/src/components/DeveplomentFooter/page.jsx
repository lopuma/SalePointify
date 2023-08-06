import useFilters from '@/hooks/useFilters'
import { useProducts } from '@/hooks/useProducts'
import styles from './dev.module.css'

export function DeveplomentFooter() {
  const { error, loading } = useProducts()
  const { category, filteredProducts } = useFilters()
  return (
    <footer className={`${styles.footer}`}>
      {JSON.stringify({ category }, null, 2)}
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{JSON.stringify(error)}</p>
      ) : (
        <p>Products : {JSON.stringify(filteredProducts?.length, null, 2)}</p>
      )}
      {}
    </footer>
  )
}
