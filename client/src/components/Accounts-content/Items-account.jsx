import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavAccounts = ({ accounts }) => {
  const pathname = usePathname()
  return (
    <>
      <ul
        className={
          "relative overflow-auto  no-scrollbar min-h-screen max-h-screen p-2 my-4 flex flex-col gap-4 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:bg-gradientx"
        }
      >
        {accounts?.success === false ? (
          <div className="text-center italic text-sm text-muted-foreground">
            {accounts?.message}
          </div>
        ) : (
          accounts?.map((account) => {
            const isActive = pathname.startsWith(`/accounts/${account.id}`)
            return (
              <div
                className={`flex flex-col sm:flex-row items-center  ${
                  isActive
                    ? 'border-b-4 border-b-primary sm:border-r-4 sm:border-r-primary'
                    : 'border-b-gray-400 border-b-4 sm:border-r-gray-400 sm:border-r-4'
                } border border-gray-400 sm:border sm:border-gray-400 rounded-md cursor-pointer hover:bg-secondary-hover   px-2 group `}
                key={account.id}
              >
                <span className="p-2">0</span>
                <li className="flex md:flex-col p-2 grow">
                  <Link href={`/accounts/${account.id}`}>{account.title}</Link>
                </li>
                <span className="p-2">0:32</span>
              </div>
            )
          })
        )}
      </ul>
    </>
  )
}

export default NavAccounts
