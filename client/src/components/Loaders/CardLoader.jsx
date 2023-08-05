import ContentLoader from 'react-content-loader'

const CardGrid = ({ count }, props) => {
  const cardArray = Array.from({ length: count }, (_, index) => (
    <div key={index} className="border border-gray-400 rounded-md p-2">
      <ContentLoader
        speed={2}
        width={170}
        height={210}
        viewBox="0 0 170 210"
        backgroundColor="#b3b3b3"
        foregroundColor="#d1d1d1"
        uniqueKey={`card-${index}`}
        {...props}
      >
        <rect x="10" y="7" rx="4" ry="4" width="140" height="102" />
        <rect x="1" y="125" rx="4" ry="4" width="160" height="21" />
        <rect x="0" y="185" rx="4" ry="4" width="71" height="17" />
        <rect x="67" y="207" rx="0" ry="0" width="3" height="0" />
        <rect x="1" y="154" rx="4" ry="4" width="160" height="21" />
      </ContentLoader>
    </div>
  ))

  return <>{cardArray}</>
}

export const PaginationLoader = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={50}
    viewBox="0 0 180 50"
    backgroundColor="#b3b3b3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <rect x="3" y="7" rx="4" ry="4" width="50" height="20" />
    <rect x="117" y="7" rx="4" ry="4" width="50" height="20" />
    <circle cx="63" cy="17" r="8" />
    <circle cx="85" cy="17" r="8" />
    <circle cx="106" cy="17" r="8" />
  </ContentLoader>
)

export const CardLoader = ({ count }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <PaginationLoader uniqueKey={'paginationLoader1'} />
      <div className="grid grid-cols-fluid m-auto w-full gap-4 p-4">
        <CardGrid count={count} />
      </div>
      <PaginationLoader uniqueKey={'paginationLoader2'} />
    </div>
  )
}
