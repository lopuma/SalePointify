'use client'
import Currency from '@/components/UI/Currency/page'
import { BookNotification } from '@/components/UI/Notification/ProductNotifications'
import { useCartStore } from '@/store/storeCart'
// import { Image } from '@nextui-org/react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import toast from 'react-hot-toast'
import { RiDeleteBinLine } from 'react-icons/ri'

// export function ProductItemss({ product }) {
//   const handleClick = () => {
//     console.log('click', product)
//     const message = 'mess'
//     const bookToDelete = {
//       title: product.title,
//       price: product.price,
//       cover: product.image,
//     }
//     const title = 'Title1'
//     toast(
//       <BookNotification
//         message={message}
//         book={bookToDelete}
//         listName={title}
//         Icon={RiDeleteBinLine}
//       />
//     )
//   }

//   return (
//     <div
//       onClick={handleClick}
//       className="transition-transform duration-300 font-mono bg-white text-foreground cursor-pointer rounded-xl border p-4 mt-2 space-y-4 flex flex-col shadow-lg shadow-stone-200 hover:shadow-lg hover:shadow-stone-600 hover:scale-105	group"
//     >
//       <div className="p-3 space-y-4 flex flex-col items-center flex-grow">
//         <div className="aspect-square rounded-xl bg-gray-100 relative w-[150px] h-[150px] ">
//           <Image
//             src={product?.image}
//             alt={product?.title}
//             fill="fill"
//             sizes={'(min-width: 66em) 20vw, (min-width: 44em) 20vw, 50vw'}
//             srcSet="small-image.png 1x, medium-image.png 2x, large-image.png 3x"
//             className="aspect-square object-cover rounded-md w-full h-full group-hover:contrast-125"
//           />
//           <div className="opacity-0 group-hover:opacity-100 transition absolute px-8 bottom-2 w-full">
//             <div className="flex gap-x-4 justify-end items-center">
//               <IconButton icon={<AiOutlineExpand size={16} />} />
//               <IconButton icon={<AiOutlineShoppingCart size={16} />} />
//             </div>
//           </div>
//         </div>
//         <>
//           <p className="font-bold text-sm ">{product?.title}</p>
//         </>
//       </div>
//       <div className="text-sm text-gray-600 rounded-lg border border-gray-600 p-2 w-max font-semibold">
//         <Currency value={product?.price} />
//       </div>
//     </div>
//   )
// }

export function ProductItems({ product }) {
  const { setIsCart, isCart } = useCartStore()
  // const isSuccess = useRef(false)
  const handleClick = () => {
    console.log('click', product)
    // isSuccess.current = true
    const message = 'mess'
    const bookToDelete = {
      title: product.title,
      price: product.price,
      cover: product.image,
    }
    const title = 'Title1'
    console.log(isCart + 1)
    setIsCart(isCart + 1)
    toast(
      <BookNotification
        message={message}
        book={bookToDelete}
        listName={title}
        Icon={RiDeleteBinLine}
      />
    )
  }
  return (
    <Card
      shadow="md"
      isPressable
      onPress={handleClick}
      className="transition-transform duration-300 font-mono cursor-pointer rounded-xl border space-y-4 shadow-stone-200 hover:shadow-md hover:shadow-stone-600 hover:scale-105	group"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={product.title}
          className="w-full object-cover h-[140px]"
          src={product?.image}
        />
      </CardBody>
      {/* <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-0 top-10 z-50 w-full">
        <div className="flex gap-x-4 justify-center items-center ">
          <IconButton
            // ref={isSuccess}
            icon={<AiOutlineShoppingCart size={16} />}
            // className={`${
            //   isSuccess.current ? 'bg-success-100' : 'bg-blue-700'
            // } text-white hover:bg-blue-900`}
            className={'bg-primary-300 text-clip hover:bg-primary-100'}
          />
        </div>
      </div> */}
      <CardFooter className="text-small justify-between gap-x-2">
        <b>{product.title}</b>
        <p className="text-default-500">
          <Currency value={product?.price} />
        </p>
      </CardFooter>
    </Card>
  )
}
