import { fetchData } from '@/services/fetchData'
// import { useState } from 'react'
import products from '@/mocks/products.json'
import ProductsContext from './ProductsContext'
const apiDataProducts = fetchData('/products')

const ProductsProvider = ({ children }) => {
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  // const getProducts = async () => {
  //   try {
  //     const products = (await apiDataProducts).read()
  //     setError(null)
  //     const mappedProducts = products?.results.map((product) => {
  //       return {
  //         id: product._id,
  //         title: product.name,
  //         description: product.description,
  //         price: product.price,
  //         category: product.category,
  //         image: product.image,
  //         active: product.active,
  //       }
  //     })
  //     setProducts(mappedProducts)
  //     return mappedProducts
  //   } catch (error) {
  //     setError(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])

  const mappedProducts = products.results.map((product) => {
    return {
      id: product._id,
      title: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      active: product.active,
    }
  })

  const productsValue = {
    products: mappedProducts,
  }
  return (
    <ProductsContext.Provider value={productsValue}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
