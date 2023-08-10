import { Container } from '@/components/Container'
import {
  MdOutlineDeliveryDining,
  MdSearch,
  MdShoppingBasket,
} from 'react-icons/md'
import ItemPos from './Item-pos'

const NavPos = () => {
  return (
    <Container
      className={'top-[80px] bg-gray-100 position fixed left-0 right-0 z-40'}
    >
      <nav className="w-full h-[60px] flex items-center justify-between  overflow-auto no-scrollbar md:overflow-x-auto md:overflow-y-hidden">
        <ul className="flex justify-between items-center gap-6">
          <li>
            <ItemPos href={'/table'} extra={'0'}>
              MAIN
            </ItemPos>
          </li>
          <li>
            <ItemPos href={'/terrace'} extra={'0'}>
              TERRACE
            </ItemPos>
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-6">
          <li>
            <ItemPos href={'/sale-deliver'}>
              <MdOutlineDeliveryDining size={30} />
            </ItemPos>
          </li>
          <li>
            <ItemPos href={'/sale-free'}>
              <MdShoppingBasket size={30} />
            </ItemPos>
          </li>
          <li>
            <ItemPos href={'/'} extra={'0'}>
              ACCOUNTS
            </ItemPos>
          </li>
          <button
            name="search"
            className="px-4 mr-4 h-[40px] md:h-[50px] flex items-center hover:bg-gray-300 rounded-md bg-sky-300 contrast-50"
          >
            <MdSearch size={30} />
          </button>
        </ul>
      </nav>
    </Container>
  )
}

export default NavPos
