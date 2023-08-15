import { Container } from '@/components/Container'
import NavPos from '@/components/Nav-pos/Nav-pos'

export const metadata = {
  title: 'Main - E-Commerce Sale Pointify',
  description: 'E-Commerce Sale Pointify',
}
export default function MainLayout({ children }) {
  return (
    <>
      <NavPos />
      <Container className={'mt-[180px] bg-red-400'}>{children}</Container>
    </>
  )
}
