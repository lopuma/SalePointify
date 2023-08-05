'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ItemPos = ({ children, className, href, extra }) => {
  const selected = usePathname()
  return (
    <Link
      key={href}
      as={href}
      href={href}
      className={cn(
        `px-4 h-[40px] md:h-[50px] flex gap-1 items-center text-foreground hover:bg-secondary-hover hover:text-foreground rounded-md font-semibold ${
          selected === href ? 'bg-secondary-hover text-primary-hover' : null
        }`,
        className
      )}
    >
      {children}
      {extra ? <span className="ml-1">({extra})</span> : null}
    </Link>
  )
}

export default ItemPos
