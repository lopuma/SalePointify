import { cn } from '@/lib/utils'
export function Container({ children, className }) {
  return (
    <section
      className={cn(
        'max-w-[2520px] mx-auto xl:px-20 md:px-10 xm:px-2 px-4 dark:bg-background dark:text-foreground',
        className
      )}
    >
      {children}
    </section>
  )
}
