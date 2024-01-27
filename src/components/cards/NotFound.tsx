import Image from "next/image"
export default function NotFound() {
  return (
    <Image
      className="w-[100%] md:w-[70%] xl:w-[50%] h-auto rounded-xl  pb-[10rem] "
      src={'/404.webp'}
      alt="Sin Resultados"
      width={500}
      height={500}
      quality={95}
    />
  )
}
