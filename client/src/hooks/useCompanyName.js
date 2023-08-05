import { fetchData } from '@/services/fetchData'
import { useCompanyStore } from '@/store/companyName'
import { useState } from 'react'

const apiDataCompany = fetchData('/company')

export function useCompany() {
  const [errors, setError] = useState(null)
  const { setCompanyName } = useCompanyStore()
  const getCompanyName = async () => {
    try {
      setError(null)
      const data = (await apiDataCompany).read()
      setCompanyName(data?.companyName)
      return data?.companyName
    } catch (error) {
      setError(error)
    }
  }

  return { getCompanyName, errors }
}
