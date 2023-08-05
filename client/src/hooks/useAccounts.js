import { searchAccounts } from '@/services/accounts'
import { useCallback, useRef, useState } from 'react'

export function useAccounts({ date, status }) {
  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setError] = useState(null)
  const previousSearch = useRef('')
  const previousStatus = useRef(status)
  const getAccounts = useCallback(async ({ date, status }) => {
    if (date === '') return
    if (date === previousSearch.current && status === previousStatus.current) {
      return
    }

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = date
      previousStatus.current = status
      const newMovies = await searchAccounts({ date, status })
      setAccounts(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  //   const sortedMovies = useMemo(() => {
  //     return sort
  //       ? [...accounts].sort((a, b) => a.title.localeCompare(b.title))
  //       : accounts
  //   }, [sort, accounts])

  return { accounts, getAccounts, loading, errors }
}
