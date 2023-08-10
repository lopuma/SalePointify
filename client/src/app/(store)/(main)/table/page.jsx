'use client'
import { Container } from '@/components/Container'
import useProducts from '@/hooks/useProducts'
import { useRef } from 'react'

const Table = () => {
  const name = useRef('')
  const { mutation } = useProducts()
  const handleSubmit = (event) => {
    event.preventDefault()
    // const formData = new FormData(event.target)
    // const fields = Object.fromEntries(formData)
    mutation.mutate(new FormData(event.target))
    console.log('loadin => ', mutation.isLoading)
    console.log('succes => ', mutation.isSuccess)
    console.log('error => ', mutation.isError)
  }

  const handleOnChange = (event) => {
    const { value, name } = event.target
    console.log(name, value)
  }

  return (
    <Container className={'mt-[160px]'}>
      <form
        className="border border-gray-500 rounded-md p-4"
        onSubmit={handleSubmit}
      >
        {mutation?.error && (
          <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
        )}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              ref={name}
              type="text"
              name="name"
              id="name_product"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleOnChange}
            />
            <label
              htmlFor="name_product"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name Product
            </label>
          </div>
          {/* <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div> */}
        </div>
        {/* <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="category"
              id="category"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              type="file"
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
        </div> */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </Container>
  )
}

export default Table
