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
  const { Color, Query, Raza, page } = searchParams
  return (
    <main className="scroll-m-[10000rem]">
      <section className="mt-[6rem] flex flex-col   xl:flex-row-reverse xl:ml-80  gap-5 ">
        <aside className="h-[15rem] xl:h-screen xl:w-[16rem] border">
          ads
        </aside>
        <Suspense key={Color! + Query! + Raza! + page!} fallback={<CardsSkeleton />}>
          <CardContainer horses={horses} searchParams={searchParams} />
        </Suspense>
      </section>
      <div className="pt-[2rem] pb-[20rem]">
        <Pagination />
      </div>
    </main>
  )
}
