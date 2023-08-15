import { usePageStore } from '@/store/storePage'
/**
 * The `Pagination` component is a React component that displays pagination information and navigation
 * buttons.
 * @typedef {Object} PaginationProps
 * @property {Object} pagination - An object containing pagination data.
 * @property {number} pagination.isPage - The current isPage number.
 * @property {number} pagination.perPage - The number of items to display per isPage.
 * @property {number} pagination.totalPages - The total number of pages.
 * @property {number} pagination.total - The total number of items.
 *
 * @param {PaginationProps} props - The props for the Pagination component.
 * @returns {JSX.Element} The Pagination component returns a JSX element that displays information about the
 * current isPage and the total number of products. It also includes previous and next buttons for
 * navigating between pages.
 */
export function Pagination({ pagination, isPreviousData }) {
  const { isPage, setIsPage } = usePageStore()
  if (!pagination) return null
  const { perPage, totalPages, total } = pagination
  const isFirstPage = isPage === 1
  const isLastPage = isPage === totalPages
  const nextPage = () => setIsPage(isPage + 1)
  const prevPage = () => setIsPage(isPage - 1)
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(isPage - 1) * perPage + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min(isPage * perPage, total)}
        </span>{' '}
        of{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>{' '}
        Products
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={isPreviousData || isFirstPage}
          className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            isFirstPage ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={prevPage}
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          disabled={isPreviousData || isLastPage}
          className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            isLastPage ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={nextPage}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
