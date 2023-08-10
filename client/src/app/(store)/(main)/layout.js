import NavPos from '@/components/Nav-pos/Nav-pos'

export const metadata = {
  title: 'Main - E-Commerce Sale Pointify',
  description: 'E-Commerce Sale Pointify',
}
export default function MainLayout({ children }) {
  return (
    <>
      <NavPos />

      <article>{children}</article>
    </>
  )
}
