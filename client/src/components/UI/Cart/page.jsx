import styles from './Cart.module.css'
export function Cart() {
  const cartPro = []
  const handleRemoveProduct = (event) => {
    console.log(event.target)
  }
  return (
    <section className="h-[500px] md:max-w-[400px] md:w-[400px] bg-green-200 rounded-sm border">
      <h1>Cart</h1>

      <div className={styles.container}>
        {cartPro?.map((product) => (
          <div className={styles.product} key={product?.id}>
            <img src={product?.thumbnail} alt={product?.title} />
            <h3>{product.title}</h3>
            {/* <Quantifier
              removeProductCallback={() => handleRemoveProduct(product?.id)}
              productId={product?.id}
              handleUpdateQuantity={handleUpdateQuantity}
            /> */}
          </div>
        ))}
      </div>
      {/* <TotalPrice amount={totalPrice} /> */}
    </section>
  )
}
