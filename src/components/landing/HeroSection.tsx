'use client'
import Image from "next/image"
import { Button } from "../ui/button"
import { LuMailPlus } from "react-icons/lu"
import { AiOutlineExport } from "react-icons/ai";
import Link from "next/link"
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useSectionInView('inicio')
  return (
    <section
      ref={ref}
      id="intro"
      className={`flex flex-col justify-center 
       gap-5 md:gap-[1rem] xl:gap-[10rem] items-center h-[88.5vh] md:scroll-m-[6rem] md:h-[82vh] xl:h-[92.05vh] mb-32 `}>
      <section className="flex flex-col xl:flex-row w-[95%] justify-center items-center text-left xl:items-center gap-6 xl:gap-[7rem]">
        <article className="flex flex-col   gap-2  xl:gap-5">
          <p className="text-xl md:text-2xl LandingSubTitle" >Bienvenidos a</p>
          <h1 className="LandingTitle font-bold text-4xl md:text-5xl">
            Gz Ecuestre
          </h1>
          <p className="text-xl md:text-3xl xl:text-2xl LandingSubTitle">
            El mejor lugar para la compra y venta de <strong>caballos</strong>
          </p>
          <section className="flex justify-between md:justify-center md:gap-[7rem] pt-6 xl:pl-10">
            <Button
              className={` flex gap-2 items-center bg-white/50
             text-negro text-lg md:text-xl hover:bg-negro hover:text-white
             active:scale-105 active:translate-y-1 transition-all
             `}>
              Contáctanos
              <LuMailPlus />
            </Button>
            <Button
              className={`bg-white/50 text-negro text-lg md:text-xl 
              hover:bg-negro hover:text-white
             active:scale-105 active:translate-y-1 transition-all
             `}>
              <Link
                className="flex gap-2 items-center"
                href={'/about'}>
                Nosotros
                <AiOutlineExport />
              </Link>
            </Button>
          </section>
        </article>
        <Image
          className="rounded-lg w-full md:w-auto  md:h-[368px]"
          src={'/caballos.webp'}
          width={480}
          height={288}
          alt="caballos"
        />
      </section>
      <Button
        className={`bg-orange-600 text-xl md:text-3xl md:py-8 md:px-8  peer-hover:bg-white/50
              hover:bg-negro hover:text-white md:rounded-2xl
             active:scale-105 active:translate-y-1 transition-all
             `}>
        <Link href={'/home'}>
          Encuentra tu próximo caballo
        </Link>
      </Button>
    </section>
  )
}
