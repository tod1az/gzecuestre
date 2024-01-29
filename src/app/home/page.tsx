import CardContainer from "@/components/cards/CardContainer"
import CardsSkeleton from "@/components/skeletons/CardsSkeleton"
import { Suspense } from "react"
import { HomeSearchParams } from "@/lib/types"
import BannerCarousel from "@/components/BannerCarousel"
import { getFeaturedHorses } from "@/lib/querys"

type PageProps = {
  searchParams: HomeSearchParams
}

export default async function page({ searchParams }: PageProps) {
  const featuredHorses = await getFeaturedHorses()
  return (
    <main className="scroll-m-[10000rem] w-full h-full bg-orange-100">
      <section className="mt-[4.5rem]  flex flex-col items-center justify-center gap-5 ">
        <BannerCarousel items={featuredHorses} />
        <h1 className="md:text-5xl text-3xl text-negro pl-2 font-bold ">Catálogo</h1>
        <Suspense key={Object.values(searchParams).join('')} fallback={<CardsSkeleton />}>
          <CardContainer searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  )
}
