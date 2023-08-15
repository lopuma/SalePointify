'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

function parserPrice(r) {
  if (typeof r !== 'string') return Number(r)
  const correctedValue = r.replace(',', '.') // Reemplaza la coma por un punto
  return parseFloat(correctedValue)
}

const Currency = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return <>{formatter.format(parserPrice(value))}</>
}

export default Currency
