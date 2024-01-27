import Image from "next/image"
export default function NotFound() {
  return (
    <Image
      className="w-[30%] h-auto rounded-xl pt-[3rem] pb-[10rem] "
      src={'/404.webp'}
      alt="Sin Resultados"
      width={500}
      height={500}
    />
  )
}
