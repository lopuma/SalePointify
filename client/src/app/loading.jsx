import { Container } from '@/components/Container'
import Skeleton from '@/components/UI/Skeleton'

function Loading() {
  return (
    <Container>
      <div className="w-full h-full p-4">
        <Skeleton className="w-full aspect-square rounde-xl md:aspect-[2.4/1]" />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
        </div>
      </div>
    </Container>
  )
}
export default Loading
