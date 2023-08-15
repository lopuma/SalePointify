import { SuccessNotification } from '@/components/UI/Notification/ProductNotifications'
import config from '@/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { AiFillCheckCircle } from 'react-icons/ai'
const API_BASE_URL = config.API_BASE_URL

export const useFetchProducts = async ({ queryKey }) => {
  if (queryKey === '') return null
  const instance = axios.create({
    baseURL: API_BASE_URL,
  })
  return await instance
    .get(`/products?category=${queryKey[1]}&page=${queryKey[2]}`)
    .then(async (res) => {
      return await res.data
    })
    .then((res) => {
      const pagination = {
        page: res?.page,
        perPage: res?.per_page,
        total: res?.total,
        totalPages: res?.total_pages,
      }
      const mappedProducts = res?.results.map((product) => {
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
      const hasCategory = res?.allCategory?.map(({ category }) => category)
      const uniqueCategories = new Set([...hasCategory])
      return {
        products: mappedProducts,
        pagination,
        allCategory: [...uniqueCategories],
      }
    })
}

const newProduct = {
  name: 'rice',
  price: '0.89',
  category: 'alimentacion',
  description: 'This is a product',
  active: true,
  image:
    'https://res.cloudinary.com/ordering/image/upload/f_auto,q_auto,w_250,c_limit/f_auto,q_auto,h_600,c_limit/v1650277680/fcpbremjyx82d4q32vvo.jpg',
}

export const useAddProducts = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post('http://192.168.1.142:3001/api/productss', newProduct)
    },
    onError: (error, variables, context) => {
      console.log({ error, variables })
      console.error(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context) => {
      toast(
        <SuccessNotification
          message={'Producto agregado correctamente'}
          Icon={AiFillCheckCircle}
        />
      )
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
    onSettled: () => {},
  })

  return mutation
}
