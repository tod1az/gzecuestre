import CardContainer from "@/components/cards/CardContainer"
import CardsSkeleton from "@/components/skeletons/CardsSkeleton"
import { Suspense } from "react"
import { HomeSearchParams } from "@/lib/types"
import { featuredHorses } from '../../lib/data'
import BannerCarousel from "@/components/BannerCarousel"
import { getHorses } from "@/lib/querys"
type PageProps = {
  searchParams: HomeSearchParams
}

export default async function page({ searchParams }: PageProps) {
  const { maxalzada, maxedad, maxprecio, minalzada, minedad, minprecio, page } = searchParams
  const horses = await getHorses(searchParams)
  return (
    <main className="scroll-m-[10000rem] w-full h-full bg-orange-100">
      <section className="mt-[4.5rem]  flex flex-col items-center justify-center gap-5 ">
        <BannerCarousel items={featuredHorses} />
        <Suspense key={maxalzada! + maxedad + maxprecio + minalzada + minedad + minprecio + page} fallback={<CardsSkeleton />}>
          <CardContainer horses={horses} searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  )
}
