'use client'
import Currency from '@/components/UI/Currency/page'
import IconButton from '@/components/UI/Icon-button'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { AiOutlineExpand, AiOutlineShoppingCart } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BookNotification } from '../Notification/ProductNotifications'

export function ProductItems({ product }) {
  const handleClick = () => {
    console.log('click', product)
    const message = 'mess'
    const bookToDelete = {
      title: product.title,
      price: product.price,
      cover: product.image,
    }
    const title = 'Title1'
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
    <div
      onClick={handleClick}
      className="transition-transform duration-300 font-mono bg-white text-foreground cursor-pointer rounded-xl border p-4 mt-2 space-y-4 flex flex-col shadow-lg shadow-stone-200 hover:shadow-lg hover:shadow-stone-600 hover:scale-105	group"
    >
      <div className="p-3 space-y-4 flex flex-col items-center flex-grow">
        <div className="aspect-square rounded-xl bg-gray-100 relative w-[150px] h-[150px] ">
          <Image
            src={product?.image}
            alt={product?.title}
            fill="fill"
            sizes={'(min-width: 66em) 20vw, (min-width: 44em) 20vw, 50vw'}
            srcSet="small-image.png 1x, medium-image.png 2x, large-image.png 3x"
            className="aspect-square object-cover rounded-md w-full h-full group-hover:contrast-125"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute px-8 bottom-2 w-full">
            <div className="flex gap-x-4 justify-end items-center">
              <IconButton icon={<AiOutlineExpand size={16} />} />
              <IconButton icon={<AiOutlineShoppingCart size={16} />} />
            </div>
          </div>
        </div>
        <>
          <p className="font-bold text-sm ">{product?.title}</p>
        </>
      </div>
      <div className="text-sm text-gray-600 rounded-lg border border-gray-600 p-2 w-max font-semibold">
        <Currency value={product?.price} />
      </div>
    </div>
  )
}
