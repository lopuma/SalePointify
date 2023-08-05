'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
})

const Currency = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <>{formatter.format(Number(value))}</>
}

export default Currency
