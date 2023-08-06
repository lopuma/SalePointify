import { Container } from '@/components/Container'
import TabLoader from '@/components/Loaders/TabLoader'
import NavPos from '@/components/Nav-pos/Nav-pos'
import Link from 'next/link'
import { Suspense, lazy } from 'react'
import styles from './pro.module.css'
const TabPanel = lazy(() => import('@/components/UI/TabPanel/page'))
const Box = lazy(() => import('@/components/UI/Box/page'))
const itemsAccounts = [
  { status: 'active', label: 'Active Accounts' },
  { status: 'close', label: 'Close Accounts' },
]

export const metadata = {
  title: 'Orders - E-Commerce Sale Pointify',
  description: 'E-Commerce Sale Pointify',
}

export default function AccountLayout({ children }) {
  return (
    <>
      <NavPos />
      <Container className="relative mb-[20px] flex flex-col sm:flex-row p-4 gap-2 mt-[140px]">
        <Suspense fallback={<TabLoader />}>
          <TabPanel items={itemsAccounts} id="account-tab">
            <Box />
            <Link
              href={'/orders/new-order'}
              // className="bg-secondary text-secondary-foreground hover:bg-secondary-hover flex place-content-center border rounded-md p-2 mx-4"
              className={`${styles.link}`}
            >
              New Order
            </Link>
          </TabPanel>
        </Suspense>
        <section className="grow">
          <article className="flex bg-orange-400">
            <div className="grow">{children}</div>
            <div className="bg-lime-400">3</div>
          </article>
        </section>
      </Container>
    </>
  )
}
