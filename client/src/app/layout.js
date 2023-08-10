'use client'
import { monda } from '@/assets/fonts/fonts'
import Backdrop from '@/components/Backdrop/page'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import { useCompany } from '@/hooks/useCompanyName'
import QueryProvider from '@/providers/query-provider'
import ToastProvider from '@/providers/toast-provider'
import { NextUIProvider } from '@nextui-org/react'
import { Suspense, useEffect } from 'react'
import './globals.css'
import Loading from './loading.jsx'

export default function RootLayout({ children }) {
  const { getCompanyName } = useCompany()
  useEffect(() => {
    getCompanyName()
  }, [])
  return (
    <html lang="en">
      <body className={`${monda.className}`}>
        <NextUIProvider>
          <QueryProvider>
            <ToastProvider />
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="min-h-[100vh] relative">{children}</main>
            </Suspense>
            <Backdrop />
            <Footer />
          </QueryProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
