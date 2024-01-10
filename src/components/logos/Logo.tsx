import Image from "next/image"

export default function Logo() {
  return (
    <section
      className="flex items-center gap-2 justify-center">
      <Image
        src={'/Logo.png'}
        width={64}
        height={64}
        alt="Logo Eg Ecuestre Imagen"
      />
      <Image
        src={'/textLogo.png'}
        width={208}
        height={208}
        alt="Logo Eg Ecuestre Texto"
      />
    </section>
  )
}


