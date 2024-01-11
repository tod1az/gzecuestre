import CardContainer from "@/components/cards/CardContainer"
import { horses } from "../../lib/data"
import Pagination from "@/components/ui/Pagination"
import CardsSkeleton from "@/components/skeletons/CardsSkeleton"
import { Suspense } from "react"
import { HomeSearchParams } from "@/lib/types"

type PageProps = {
  searchParams: HomeSearchParams
}

export default function page({ searchParams }: PageProps) {
  const { maxalzada, maxedad, maxprecio, minalzada, minedad, minprecio, page } = searchParams
  return (
    <main className="scroll-m-[10000rem]">
      <section className="mt-[6rem] flex flex-col justify-center xl:ml-80  gap-5 ">
        <Suspense key={maxalzada! + maxedad + maxprecio + minalzada + minedad + minprecio + page} fallback={<CardsSkeleton />}>
          <CardContainer horses={horses} searchParams={searchParams} />
        </Suspense>
        <div className="pt-[2rem] pb-[6rem]  md:pb-[20rem]">
          <Pagination />
        </div>
      </section>
    </main>
  )
}
