import Card from "./Card"
import { Fragment } from "react"
import { HomeSearchParams } from "@/lib/types"
import Ad from "../ad/Ad"
import Pagination from "../ui/Pagination"
import { getAdLocation } from "@/lib/utils"
import { getHorses } from "@/lib/querys"

type CardContainerProps = {
  searchParams: HomeSearchParams
}
export default async function CardContainer({ searchParams }: CardContainerProps) {
  const horses = await getHorses(searchParams)
  const adLocation = getAdLocation(horses)
  return (
    <section className="flex flex-col items-center pb-[10rem] w-full  pt-10 p-6 bg-gradient-to-b from-orange-100 via-blanco to-orange-200 rounded-lg ">
      <h1 className="md:text-5xl text-3xl text-negro pl-2 font-bold mb-8">Catálogo</h1>
      <section
        className="grid grid-cols-2   rounded-lg xl:grid-cols-4 md:grid-cols-3 justify-center gap-[1rem] md:gap-[1rem]">
        {
          horses.map((horse, index) => {
            if (index === adLocation) {
              return (
                <Fragment key={'ad'}>
                  <Ad />
                  <Card horse={horse} />
                </Fragment>
              )
            }
            return (
              <Fragment key={horse.id}>
                <Card horse={horse} />
              </Fragment>
            )
          })
        }
      </section>
      <div className="pt-[2rem] pb-2 ">
        <Pagination />
      </div>
    </section>
  )
}
