'use client'
import DatePicker from '@/components/UI/DatePicker/page'
import { useTab } from '@/store/useTab'

const Box = ({ children }) => {
  const { status } = useTab()
  return (
    <>
      <article
        className={`${status === 'active' ? 'block' : 'hidden'} `}
        id={status}
        role="tabpanel"
        aria-labelledby={`${status}-tab`}
      >
        <DatePicker status={status} />
      </article>
      <article
        className={`${status === 'close' ? 'block' : 'hidden'} `}
        id={status}
        role="tabpanel"
        aria-labelledby={`${status}-tab`}
      >
        <DatePicker status={status} />
      </article>
      {children}
    </>
  )
}

export default Box
