import Detail from '@/components/detail/Detail'
import DetailSkeleton from '@/components/skeletons/DetailSkeleton'
import { Suspense } from 'react'


type PageProps = {
  params: {
    id: string
  }
}

export default function page({ params }: PageProps) {
  return (
    <Suspense fallback={<DetailSkeleton key={params.id} />}>
      <Detail params={params} />
    </Suspense>
  )
}
