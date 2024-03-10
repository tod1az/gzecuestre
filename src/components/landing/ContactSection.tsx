"use client";
import LandingHeader from "./LangingHeader";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const { ref } = useSectionInView("contacto");
  const [form, setForm] = useState<HTMLFormElement | null>(null);
  useEffect(() => {
    const formref = document.getElementById("contact-form");
    setForm(formref as HTMLFormElement);
  }, []);
  return (
    <section
      ref={ref}
      id="contact"
      className="md:scroll-m-[4rem] scroll-m-[6rem] flex flex-col items-center gap-[6rem]  xl:gap-[5rem] h-[91.5vh] md:h-[93vh] xl:h-[92.05vh]"
    >
      <LandingHeader>Contáctanos</LandingHeader>
      <form
        id="contact-form"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          }
          toast.success("Mensaje enviado con éxito");
          if (form != null) {
            form.reset();
          }
        }}
        className="grid grid-cols-2  gap-1 md:gap-2 shadow-2xl bg-blanco px-8 pt-10 pb-6 rounded-lg w-[24rem] md:w-[36rem] xl:w-[56rem]  h-[32rem] "
      >
        <Input
          id="emailSender"
          name="emailSender"
          placeholder="Email"
          type="email"
          required
          className=" text-sm md:text-lg border-gray-600 col-span-1"
        />
        <Input
          id="nameSender"
          name="nameSender"
          placeholder="Nombre"
          required
          className=" text-sm md:text-lg border-gray-600 col-span-1"
        />
        <Textarea
          id="message"
          name="message"
          placeholder="Escribe aquí tu mensaje"
          required
          className=" text-sm md:text-lgtext-sm md:text-lg col-span-2 h-[16rem] mb-4 border-gray-600 "
        />
        <div className="col-span-2 flex items-center justify-center">
          <SubmitButton />
        </div>
      </form>
    </section>
  );
}
