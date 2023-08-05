import { jost } from '@/assets/fonts/fonts'
import logo from '@/assets/logo.svg'
import { useCompanyStore } from '@/store/companyName'
import Image from 'next/image'

export default function Logo() {
  const { companyName } = useCompanyStore()
  return (
    <a href="#" className="flex items-center px-2 w-5/12">
      <Image src={logo.src} alt={companyName} height={'70'} width={'70'} />
      <span
        className={`${jost.className} text-logo self-center mx-3 whitespace-nowrap text-2xl font-semibold w-full`}
      >
        {companyName}
      </span>
    </a>
  )
}
