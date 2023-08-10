import Navbar from '@/components/Header/Navbar/page'
import { lazy, Suspense } from 'react'
const Logo = lazy(() => import('@/components/Header/Logo/page'))

export default function Header() {
  return (
    <header
      className={
        'fixed top-0 z-50 w-full h-[80px] flex items-center justify-between py-2 px-4 transition-shadow duration-300 shadow-lg hover:shadow-md dark:shadow-slate-500 text-header-foreground bg-header dark:border-slate-400 dark:shadow-[0_5px_5px_-5px_#333]'
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Logo />
      </Suspense>
      <Navbar />
    </header>
  )
}
