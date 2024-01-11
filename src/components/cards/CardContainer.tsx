import Card from "./Card"
import { Fragment } from "react"
import { HomeSearchParams, type Horse } from "@/lib/types"
import Ad from "../ad/Ad"
import Pagination from "../ui/Pagination"

type CardContainerProps = {
  horses: Horse[]
  searchParams: HomeSearchParams
}
export default function CardContainer({ horses, searchParams }: CardContainerProps) {
  const addLocation = 13
  return (
    <section className="flex flex-col items-center pb-[10rem] w-full bg-gradient-to-b from-orange-100 via-blanco to-orange-200 rounded-lg  pt-10 p-6">
      <h1 className="md:text-5xl text-3xl text-negro font-bold mb-8">Catálogo</h1>
      <section
        className="grid grid-cols-2   rounded-lg xl:grid-cols-4 md:grid-cols-3 justify-center gap-x-5  md:gap-x-[1rem] md:gap-y-[1rem]">
        {
          horses.map((horse, index) => {
            if (index + 1 === addLocation) {
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
