import Card from "./Card"
import { Fragment } from "react"
import { HomeSearchParams, type Horse } from "@/lib/types"
import Ad from "../ad/Ad"
import { getEvenHalf } from "@/lib/utils"

type CardContainerProps = {
  horses: Horse[]
  searchParams: HomeSearchParams
}
export default function CardContainer({ horses, searchParams }: CardContainerProps) {
  const halfResponse = getEvenHalf(horses)
  return (
    <section className="flex flex-wrap mb-10 xl:w-10/12 xl:px-16 justify-center gap-1 md:gap-6">
      {
        horses.map((horse, index) => {
          if (index + 1 === halfResponse) {
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
