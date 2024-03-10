import { getHorse } from "@/lib/querys";
import { FaWhatsapp } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import Link from "next/link";
import DetailCarousel from "@/components/detail/DetailCarousel";
import VideoCarousel from "@/components/detail/VideoCarousel";
import { getAge } from "@/lib/utils";
import { Horse } from "@/lib/types";
import { GiFamilyTree } from "react-icons/gi";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Detail({ params }: PageProps) {
  const { id } = params;
  const horse = await getHorse(id);
  return (
    <section className="flex flex-col w-3/4   md:gap-y-8  mb-[6rem]  items-center">
      <div className="w-full">
        <DetailCarousel images={horse?.imagenes as string[]} />
      </div>
      <div className="flex flex-col  justify-between items-start md:pr-16 md:pl-2 w-full">
        <div className="flex-col flex  justify-center gap-6  pt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-negro">
            {horse?.nombre}
          </h1>
          <p className="font-bold text-3xl">Precio a convenir</p>
          <Contact
            email={horse!.email}
            name={horse!.nombre}
            number={horse!.numero}
            contactName={horse!.nombre_contacto}
          />
          <p className="text-pretty text-sm md:text-lg">{horse!.descripcion}</p>
          {horse!.pedigree && (
            <Link
              target="_blank"
              href={horse!.pedigree}
              className="font-bold hover:scale-105 transition-transform px-4 py-0 h-[2.5rem] w-max flex gap-2 items-center text-black hover:bg-negro hover:text-blanco bg-orange-200 rounded-lg"
            >
              Pedigree <GiFamilyTree />
            </Link>
          )}
          <Atributtes horse={horse!} />
        </div>
      </div>
      <div className="w-full mt-12">
        <VideoCarousel items={horse!.videos} name={horse!.nombre} />
      </div>
    </section>
  );
}

type ContactProps = {
  email: string;
  number: string;
  name: string;
  contactName: string;
};

function Contact({ number, email, name, contactName }: ContactProps) {
  return (
    <section className="flex flex-col gap-2 items-center pt-2">
      <p className="w-full text-left text-lg mb-5">
        <strong>Nombre de contacto: </strong>
        {contactName}
      </p>
      <div className="flex flex-col justify-start w-full gap-4">
        <div className="flex items-center justify-between md:justify-start w-full md:gap-[10rem]">
          <Link
            className="hover:scale-105 transition-transform px-4 py-0 h-[2.5rem] flex gap-2 items-center text-white hover:bg-negro bg-orange-500 rounded-lg"
            target="_blank"
            href={`https://wa.me/${number}?text=Hola ${contactName} ! Quisiera saber más sobre ${name} publicado en Gz Ecuestre`}
          >
            WhatsApp
            <div className="text-xl">
              <FaWhatsapp />
            </div>
          </Link>

          {/* <Link
            target="_blank"
            href={`mailto:${email}?subject=Publicación Gz Ecuestre`}
            className="hover:scale-105 transition-transform px-4 py-0 h-[2.5rem] flex gap-2 items-center text-white hover:bg-negro bg-orange-500 rounded-lg"
          >
            Email <LuMailPlus />
          </Link> */}
        </div>
      </div>
    </section>
  );
}

type AtributtesProps = {
  horse: Horse;
};

function Atributtes({ horse }: AtributtesProps) {
  return (
    <section className="text-lg flex flex-col  gap-5 items-start h-auto">
      {/* <p>
        <strong>Raza: </strong>
        {horse.raza?.nombre}
      </p> */}
      <p>
        <strong>Edad: </strong>
        {`${getAge(horse.fecha_de_nacimiento)} años`}
      </p>
      <p>
        <strong>Sexo: </strong>
        {horse.sex}
      </p>
      {/* <p>
        <strong>Alzada: </strong>
        {`${horse.alzada}cm`}
      </p>
      <p>
        <strong>Salto: </strong>
        {`${horse.salto}cm`}
      </p> */}
      <p>
        <strong>Provincia: </strong>
        {horse.provincia?.nombre}
      </p>
      {/* <p>
        <strong>Disciplina: </strong>
        {horse.disciplina?.nombre}
      </p> */}
    </section>
  );
}
