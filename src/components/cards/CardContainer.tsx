import Card from "./Card"
import { Fragment } from "react"
import { HomeSearchParams, type Horse } from "@/lib/types"
import Ad from "../ad/Ad"

type CardContainerProps = {
  horses: Horse[]
  searchParams: HomeSearchParams
}
export default function CardContainer({ horses, searchParams }: CardContainerProps) {
  const addLocation = 13
  return (
    <section
      className="grid grid-cols-2 gap-1  xl:grid-cols-4 mx-auto md:grid-cols-3 justify-center  md:gap-x-[1rem] md:gap-y-[1rem]">
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
  )
}
