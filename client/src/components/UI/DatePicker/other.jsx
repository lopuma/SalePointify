'use client'
import NavAccounts from '@/components/Accounts-content/Items-account'
import { useAccounts } from '@/hooks/useAccounts.js'
import { useRef, useState } from 'react'
import { Code } from 'react-content-loader'

function useSearch() {
  const [date, updateDate] = useState('')
  // const [error, setError] = useState(null)
  // const isFirstInput = useRef(true)

  // useEffect(() => {
  //   if (isFirstInput.current) {
  //     isFirstInput.current = search === ''
  //     return
  //   }

  //   if (search === '') {
  //     setError('No se puede buscar una película vacía')
  //     return
  //   }

  //   // if (search.match(/^\d+$/)) {
  //   //   setError('No se puede buscar una película con un número')
  //   //   return
  //   // }

  //   if (search.length < 3) {
  //     setError('La búsqueda debe tener al menos 3 caracteres')
  //     return
  //   }

  //   setError(null)
  // }, [search])

  return { date, updateDate }
}

function DatePicker({ status }) {
  const hoy = new Date()
  const futureDate = hoy.getDate()
  hoy.setDate(futureDate)
  const todayDate = hoy.toLocaleDateString('en-CA')
  const [today, setToday] = useState(false)
  const { date, updateDate } = useSearch()
  const { accounts, loading, errors, getAccounts } = useAccounts({
    date,
    status,
  })
  const dateInputRef = useRef()
  const todayRef = useRef()

  // useEffect(() => {
  //   try {
  //     // todayRef.current.focus()
  //     if (tomorrowRef.current === false) {
  //     } else {
  //     }
  //     if (primerRef.current) {
  //       updateSearch(todayDate)
  //       getAccounts({ search: todayDate })
  //     }
  //     // updateSearch(today ? todayDate : search)
  //     // getAccounts({ search: todayDate })
  //     // if (today) {
  //     //   tomorrowRef.current = true
  //     // }
  //     // if (tomorrowRef.current === false && primerRef.current === '') {
  //     //   updateSearch(search)
  //     // }
  //   } catch (error) {}
  // }, [search])

  const handleDateToday = () => {
    setToday(!today)
    if (todayRef.current.checked) {
      getAccounts({ date: todayDate, status })
      updateDate(todayDate)
    } else {
      updateDate('')
    }
  }

  const handleChangeDate = (event) => {
    const newSearch = event.target.value
    if (todayDate !== newSearch) {
      setToday(false)
    } else {
      setToday(true)
    }
    updateDate(newSearch)
    getAccounts({ date: newSearch, status })
  }

  return (
    <>
      <div className="relative sm:max-w-sm flex place-content-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          ref={dateInputRef}
          name="date-picker"
          type="date"
          onChange={handleChangeDate}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          value={date}
        />
        <div className="ml-2 flex items-center pr-3 cursos-pointer gap-2  cursor-pointer group">
          <input
            ref={todayRef}
            name="today"
            type="checkbox"
            onChange={handleDateToday}
            checked={today}
            id="today"
          />
          <label htmlFor="today" className="cursor-pointer">
            Today
          </label>
        </div>
      </div>
      {loading ? (
        <div className="mt-4 py-2 flex flex-col gap-4">
          <Code />
          <Code />
          <Code />
        </div>
      ) : errors ? (
        <div className="mt-4 py-2 flex items-center text-xs text-red-700 font-light italic">
          {errors}
        </div>
      ) : (
        date && <NavAccounts accounts={accounts} />
      )}
    </>
  )
}

export default DatePicker
