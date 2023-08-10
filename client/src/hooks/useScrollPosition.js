import { useSignal } from '@preact/signals-react'

export const useScrollPosition = () => {
  const count = useSignal(false)
  // const [scrollPos, setScrollPos] = useState(false)
  // const scrollListener = useRef(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        count.value = true
      } else {
        count.value = false
      }
    })
  }
  console.log('useScrollPosition', count.value)
  return { count }
}
