import Card from "./Card"
import { Fragment } from "react"
import { HomeSearchParams } from "@/lib/types"
import Pagination from "../ui/Pagination"
import { getAdLocation } from "@/lib/utils"
import { getHorses, getTotalHorses } from "@/lib/querys"
import NotFound from "./NotFound"
import AdSv from "../ad/AdSv"
import { cn } from "@/lib/utils"

type CardContainerProps = {
  searchParams: HomeSearchParams
}
export default async function CardContainer({
  searchParams,
}: CardContainerProps) {
  const horses = await getHorses(searchParams)
  const totalHorses = await getTotalHorses(searchParams)
  const adLocation = getAdLocation(horses)
  if (horses.length === 0) return <NotFound />
  return (
    <section className="flex flex-col items-center pb-[10rem] justify-center w-full  pt-10 p-6 bg-gradient-to-b from-orange-100 via-blanco to-orange-200 rounded-lg ">
      <section
        className={cn(
          "grid grid-cols-2 items-center justify-center rounded-lg xl:grid-cols-4 md:grid-cols-3 gap-[1rem] md:gap-[1rem]",
          { "md:flex w-screen flex flex-wrap ": horses.length < 4 }
        )}
      >
        {horses.map((horse, index) => {
          if (index === adLocation[0]) {
            return (
              <Fragment key={"ad"}>
                <AdSv location={adLocation[0]} />
                <Card horse={horse} />
              </Fragment>
            )
          }
          if (index === adLocation[1]) {
            return (
              <Fragment key={"ad"}>
                <AdSv location={adLocation[1]} />
                <Card horse={horse} />
              </Fragment>
            )
          }
          return (
            <Fragment key={horse.id}>
              <Card horse={horse} />
            </Fragment>
          )
        })}
      </section>
      {horses.length <= 4 && <AdSv location={0} />}
      <div className="pt-[2rem] pb-2 ">
        <Pagination totalItems={totalHorses} />
      </div>
    </section>
  )
}
