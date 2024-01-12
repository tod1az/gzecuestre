import { type Horse } from "@/lib/types"
import Image from "next/image"
import CardBadge from "./CardBadge"
import Link from "next/link"

type CardProps = {
  horse: Horse
}

export default function Card({ horse }: CardProps) {
  return (
    <Link href={`/horses/${horse.id}`}>
      <article className="group hover:bg-orange-100/50 hover:text-negro transition-colors flex flex-col  text-gris rounded-xl gap-1 text-center h-[18rem] w-[11rem]  md:h-[20rem] md:w-[14rem] bg-blanco shadow-xl overflow-hidden">
        <div className="overflow-hidden">
          <Image
            className="md:group-hover:scale-110 object-cover transition-transform w-full h-[7rem] md:h-[9rem]"
            src={'/caballo.jpg'}
            alt="caballo"
            width={400}
            height={400}
            quality={90}
          />
        </div>
        <div className="text-left px-7 mb-3 md:mb-4">
          <h2 className="mt-4 text-sm font-bold">{horse.name}</h2>
          <h3 className="font-bold" >$9999</h3>
        </div>
        <section className="px-7 flex flex-wrap text-center text-nowrap gap-1  md:gap-2 justify-center">
          <CardBadge className="group-hover:bg-white group-hover:text-black">{horse.breed}</CardBadge>
          <CardBadge className="group-hover:bg-white group-hover:text-black">{`${horse.age} años`}</CardBadge>
          <CardBadge className="group-hover:bg-white group-hover:text-black">{horse.sex}</CardBadge>
        </section>
      </article>
    </Link>
  )
}
