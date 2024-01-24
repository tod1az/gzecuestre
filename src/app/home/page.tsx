import CardContainer from "@/components/cards/CardContainer"
import CardsSkeleton from "@/components/skeletons/CardsSkeleton"
import { Suspense } from "react"
import { HomeSearchParams } from "@/lib/types"
import { featuredHorses } from '../../lib/data'
import BannerCarousel from "@/components/BannerCarousel"
type PageProps = {
  searchParams: HomeSearchParams
}

export default async function page({ searchParams }: PageProps) {
  const { maxalzada, maxedad, maxprecio, minalzada, minedad, minprecio, page } = searchParams

  return (
    <main className="scroll-m-[10000rem] w-full h-full bg-orange-100">
      <section className="mt-[4.5rem]  flex flex-col items-center justify-center gap-5 ">
        <BannerCarousel items={featuredHorses} />
        <h1 className="md:text-5xl text-3xl text-negro pl-2 font-bold ">Catálogo</h1>
        <Suspense key={maxalzada! + maxedad + maxprecio + minalzada + minedad + minprecio + page} fallback={<CardsSkeleton />}>
          <CardContainer searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  )
}
