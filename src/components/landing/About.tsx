import BluredBackgroud from "../ui/BluredBackgroud";

export default function About() {
  return (
    <section className="flex flex-col  items-center  text-black h-screen">
      <h1 className="z-20 text-4xl pt-24">Sobre nosotros</h1>
      <article className="z-20 flex flex-col gap-4 w-[30rem] md:w-[40rem] font-sans text-lg px-2 pt-6 text-pretty">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor nobis eaque optio, natus dicta, rem delectus quo perferendis a,
        </p>
        <p>ducimus distinctio necessitatibus exercitationem! Repudiandae totam
          doloremque distinctio vitae cumque quasi.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor nobis eaque optio, natus dicta, rem delectus quo perferendis a,
        </p>
        <p>ducimus distinctio necessitatibus exercitationem! Repudiandae totam
          doloremque distinctio vitae cumque quasi.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor nobis eaque optio, natus dicta, rem delectus quo perferendis a,
        </p>
        <p>ducimus distinctio necessitatibus exercitationem! Repudiandae totam
          doloremque distinctio vitae cumque quasi.
        </p>
      </article>
      <BluredBackgroud />
    </section>
  )
}
