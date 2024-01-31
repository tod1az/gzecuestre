import { type Horse } from "@/lib/types"
import Image from "next/image"
import CardBadge from "./CardBadge"
import Link from "next/link"
import { calcularTiempoTranscurrido, getAge } from "@/lib/utils"

type CardProps = {
  horse: Horse
}

export default function Card({ horse }: CardProps) {
  return (
    <Link href={`/horses/${horse.id}`}>
      <article className="group hover:bg-orange-100/50 hover:text-negro transition-colors flex flex-col text-black/80 rounded-xl gap-1 text-center h-[18rem] w-[11rem]  md:h-[20rem] md:w-[14rem] bg-blanco shadow-xl overflow-hidden">
        <div className="overflow-hidden">
          <Image
            className="md:group-hover:scale-110 object-cover transition-transform w-full h-[7rem] md:h-[9rem]"
            src={horse.imagenes[0]}
            alt="caballo"
            width={400}
            height={400}
            quality={90}
          />
        </div>
        <div className="text-left px-7 mb-1 md:mb-2">
          <h2 className="mt-2 text-sm font-bold">{horse.nombre}</h2>
          {
            horse.precio_visible
              ? <h3 className="font-bold" >{`$${horse.precio}`}</h3>
              : <h3 className="font-bold whitespace-nowrap" >Precio a convenir</h3>
          }
        </div>
        <section className="px-7 flex flex-wrap text-center text-nowrap gap-1  md:gap-2 justify-center">
          <CardBadge className="group-hover:bg-white group-hover:text-black">{horse.raza?.nombre}</CardBadge>
          <CardBadge className="group-hover:bg-white group-hover:text-black">{`${getAge(horse.fecha_de_nacimiento)} años`}</CardBadge>
          <CardBadge className="group-hover:bg-white group-hover:text-black">{horse.sex}</CardBadge>
        </section>
        <small className="text-[0.7rem] mt-auto w-full text-center pb-2">
          {`Hace ${calcularTiempoTranscurrido(horse.created_at)} en `}
          <strong>{horse.provincia?.nombre}</strong>
        </small>
      </article>
    </Link>
  )
}
