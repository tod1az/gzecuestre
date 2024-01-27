'use client'
import { useSectionInView } from "@/lib/hooks";
import LandingHeader from "./LangingHeader";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";

export default function About() {
  const { ref } = useSectionInView('contacto')
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col  items-center md:scroll-m-[4rem] scroll-m-[6rem]  text-black h-screen">
      <LandingHeader>Nosotros</LandingHeader>
      <article className="flex flex-col gap-4  md:w-[40rem] xl:w-[60rem] text-xl px-4 pt-8 md:pt-16 text-pretty">
        <p>
          “GZ Ecuestre” es una empresa dedicada a facilitar la compra y venta de caballos,
          actuando
          como intermediario para garantizar la satisfacción tanto de los compradores como de los
          vendedores.
        </p>
        <p>
          Nos especializamos en conectar a apasionados de los caballos con ejemplares
          de calidad y adecuados a sus necesidades específicas.
        </p>
        <p>
          Nuestro objetivo es brindar un
          servicio integral y personalizado, brindando asesoramiento experto, evaluación de caballos,
          negociaciones transparentes y una experiencia sin complicaciones. Con una amplia red de
          contactos en el mundo ecuestre y un profundo conocimiento del mercado equino.
        </p>
        <div className="flex  justify-center gap-8 md:gap-4 xl:gap-[10rem] pt-4">
          <Link
            className="hover:scale-105 transition-transform px-4 py-0 h-[2.5rem] flex gap-2 items-center text-white hover:bg-negro bg-orange-500 rounded-lg"
            target="_blank"
            href={`https://walink.co/a1faab`}
          >
            WhatsApp
            <div className="text-xl">
              <FaWhatsapp />
            </div>
          </Link>
          <Link
            target="_blank"
            href={`mailto:gzecuestre@gmail.com?subject=Info sobre Gz Ecuestre`}
            className="hover:scale-105 transition-transform px-4 py-0 h-[2.5rem] flex gap-2 items-center text-white hover:bg-negro bg-orange-500 rounded-lg"
          >
            Email  <LuMailPlus />
          </Link>
        </div>
      </article>
    </section>
  )
}
