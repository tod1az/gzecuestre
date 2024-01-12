import WhatsAppWidget from "@/components/WhatsAppWidget"
import { Button } from "@/components/ui/button"
import { getHorse } from "@/lib/querys"
import Image from "next/image"

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params
  const horse = await getHorse(id)
  if (horse === undefined) return <h1>Cargando...</h1>
  return (
    <main className="h-screen flex flex-col md:flex-row items-center justify-center">
      <section>
        <h1>{horse.name}</h1>
        <p><strong>Raza: </strong>{horse.breed}</p>
        <p><strong>Edad: </strong>{`${horse.age} años`}</p>
        <p><strong>Sexo: </strong>{horse.sex}</p>
        <p><strong>Email de contacto: </strong> {horse.email}</p>
        <p><strong>Numero contacto: </strong> {horse.number}</p>
        <p>{horse.description}</p>
      </section>
      <Image
        className=""
        src={'/caballo.jpg'}
        alt="caballo"
        width={400}
        height={400}
        quality={90}
      />
      <WhatsAppWidget href='https://walink.co/a1faab' />
    </main>
  )
}
