import NavBar from '@/components/NavBar'
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
    <main className="flex flex-col bg-gradient-to-l w-screen pt-[6rem]  from-orange-100 to orange-50 items-center">
      <NavBar />
      <Suspense key={params.id} fallback={<DetailSkeleton />}>
        <Detail params={params} />
      </Suspense>
    </main>
  )
}
