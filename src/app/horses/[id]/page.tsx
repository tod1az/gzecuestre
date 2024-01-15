import Video from "@/components/detail/Video"
import { getHorse } from "@/lib/querys"
import Image from "next/image"
import WhatsAppLogo from "@/components/logos/WhatsAppLogo"
import { LuMailPlus } from "react-icons/lu"
import Link from "next/link"
import { Horse } from "@/lib/types"
import DetailCarousel from "@/components/detail/DetailCarousel"
import { featuredHorses } from "@/lib/data"

type PageProps = {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params
  const horse = await getHorse(id)
  if (!horse) return <h1>Cargando...</h1>
  return (
    <main className="flex flex-col bg-gradient-to-l w-screen pt-[6rem]  from-orange-100 to orange-50 items-center">
      <section className="flex flex-col w-3/4   gap-y-8  mb-[6rem]  items-center">
        <div className="w-full">
          <DetailCarousel items={featuredHorses} name={horse.name} />
        </div>
        <div className="flex justify-between pr-16 pl-2 w-full">
          <div className="flex-col flex w-1/3 justify-center gap-6  pt-6">
            <h1 className="pl-2 text-5xl font-bold text-negro" >{horse.name}</h1>
            <p className="font-bold text-4xl">{`$${horse.price}`}</p>
            <p className="text-pretty">{horse.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim, a vel ratione id, voluptas aspernatur tenetur numquam eaque ab debitis quasi dolorum, error nobis repellendus architecto nam reiciendis repudiandae!</p>
          </div>
          <Atributtes horse={horse} />
        </div>
        <div className="col-span-2">
          <Contact email={horse.email} name={horse.name} number={horse.number} />
        </div>
      </section>
    </main>
  )
}

type ContactProps = {
  email: string,
  number: string,
  name: string
}

function Contact({ number, email, name }: ContactProps) {
  return (
    <section className="flex flex-col items-center gap-8 ">
      <div className="flex items-center gap-[10rem]">
        <Link
          className="hover:scale-105 transition-transform "
          target="_blank"
          href={`https://wa.me/${number}?text=Hola! Quisiera saber más sobre ${name} publicado en Gz Ecuestre`}
        >
          <WhatsAppLogo size="80" />
        </Link>
        <Link
          target="_blank"
          href={`mailto:${email}?subject=Publicación Gz Ecuestre`}
          className="hover:scale-105 transition-transform px-4 py-0 h-[2.5rem] flex gap-2 items-center text-white hover:bg-negro bg-orange-500 rounded-lg"
        >
          Contactar  <LuMailPlus />
        </Link>
      </div>
    </section>

  )
}

type AtributtesProps = {
  horse: Horse
}

function Atributtes({ horse }: AtributtesProps) {
  return (
    <section className="pt-16    text-lg flex flex-col  gap-5 items-start h-auto">
      <p><strong>Raza: </strong>{horse.breed}</p>
      <p><strong>Edad: </strong>{`${horse.age} años`}</p>
      <p><strong>Sexo: </strong>{horse.sex}</p>
    </section>
  )
}
