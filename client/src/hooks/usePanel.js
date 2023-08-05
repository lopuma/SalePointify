import { useState } from 'react'
function usePanel() {
  const [status, setStatus] = useState('active')
  return {
    status,
    setStatus,
  }
}

export default usePanel
