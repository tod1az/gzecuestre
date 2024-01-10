import Card from "./Card"
import { Fragment } from "react"
import { HomeSearchParams, type Horse } from "@/lib/types"

type CardContainerProps = {
  horses: Horse[]
  searchParams: HomeSearchParams
}
export default function CardContainer({ horses, searchParams }: CardContainerProps) {
  return (
    <section className="flex flex-wrap mb-10 xl:w-10/12 xl:px-16 justify-center gap-1 md:gap-6">
      {
        horses.map((horse) => (
          <Fragment key={horse.id}>
            <Card horse={horse} />
          </Fragment>
        ))
      }
    </section>
  )
}
