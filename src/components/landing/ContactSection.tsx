'use client'
import LandingHeader from "./LangingHeader";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { IoIosSend } from "react-icons/io";
import { Label } from "../ui/label";
import { useSectionInView } from "@/lib/hooks";


export default function ContactSection() {

  const { ref } = useSectionInView('contacto')

  return (
    <section
      ref={ref}
      id="contact"
      className="md:scroll-m-[4rem] scroll-m-[6rem] flex flex-col items-center gap-[6rem]  xl:gap-[5rem] h-[91.5vh] md:h-[93vh] xl:h-[92.05vh]">
      <LandingHeader>
        Contáctanos
      </LandingHeader>
      <form className="grid grid-cols-2  gap-1 md:gap-2 shadow-2xl bg-blanco px-8 py-6 rounded-lg w-[24rem] md:w-[36rem] xl:w-[56rem]  h-[32rem] ">
        <Label className="text-lg" htmlFor="email">
          Email
        </Label >
        <Label className="text-lg" htmlFor="name">
          Nombre
        </Label>
        <Input id="email" name="email" placeholder="ejemplo@ejemplo.com" className=" text-sm md:text-lg border-gray-600 col-span-1" />
        <Input id="name" name="name" placeholder="Tu nombre" className=" text-sm md:text-lg border-gray-600 col-span-1" />
        <Label htmlFor="message" className="text-lg col-span-2">
          Mensaje
        </Label>
        <Textarea id="message" name="message" placeholder="Escribe aquí tu mensaje" className=" text-sm md:text-lgtext-sm md:text-lg col-span-2 h-[16rem] mb-4 border-gray-600 " />
        <div className="col-span-2 flex items-center justify-center">
          <Button
            className={`flex text-lg gap-2 items-center bg-orange-600
              hover:bg-negro hover:text-white w-[8rem] h-[2rem]
             active:scale-105 active:translate-y-0.5 transition-all
             `}>
            Enviar
            <IoIosSend />
          </Button>
        </div>
      </form>
    </section>
  )
}
