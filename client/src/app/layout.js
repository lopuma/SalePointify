'use client'
import { monda } from '@/assets/fonts/fonts'
import Backdrop from '@/components/Backdrop/page'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import NavPos from '@/components/Nav-pos/Nav-pos'
import { useCompany } from '@/hooks/useCompanyName'
import ToastProvider from '@/providers/toast-provider'
import { Suspense, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './globals.css'
import Loading from './loading.jsx'

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  const { getCompanyName } = useCompany()
  useEffect(() => {
    getCompanyName()
  }, [])
  return (
    <html lang="en">
      <body className={`${monda.className}`}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider />
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="min-h-[100vh] relative">
              <NavPos />
              {children}
            </main>
          </Suspense>
          <Backdrop />
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  )
}
