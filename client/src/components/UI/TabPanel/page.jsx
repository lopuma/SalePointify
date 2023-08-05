'use client'
import ButtonComponent from '@/components/UI/Button/page'
import { cn } from '@/lib/utils'
import { useTab } from '@/store/useTab'

function TabPanel({ children, className, items, id, ...props }) {
  const { setStatus, status } = useTab()

  const handleTabClick = (tabId) => {
    setStatus(tabId)
  }
  return (
    <section
      className={cn(
        "relative sm:w-[300px] md:w-[350px] md:max-w-[350px] p-4 rounded-md border border-gray-200 dark:border-gray-700 shadow-md after:content-[''] after:absolute after:right-0 after:top-0 after:w-1 after:h-full after:bg-gradienty",
        className
      )}
      aria-label={id}
      {...props}
    >
      <header className="w-full mb-4 flex items-center border-b-2 border-b-slate-200">
        {items.map((item) => {
          return (
            <ul key={item.status} role={item.status}>
              <ButtonComponent
                id={`${item.status}-tab`}
                className={`${
                  status === item.status
                    ? 'border-selected text-selected-foreground'
                    : 'border-transparent'
                }`}
                size={'small'}
                intent={'outline'}
                onClick={() => handleTabClick(item.status)}
                rol="tab"
                aria-controls={item.status}
                aria-selected={status === item.status}
              >
                {item.label || item.status}
              </ButtonComponent>
            </ul>
          )
        })}
      </header>
      <main className="flex flex-col py-2 h-full">{children}</main>
    </section>
  )
}

export default TabPanel
