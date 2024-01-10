'use client'
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Links } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks";
import { type SectionName } from "@/lib/types";

export default function LandingNavBar() {

  const { activeSection, setActiveSection, setLastClick } = useActiveSection()
  const handleSectionChange = (name: SectionName) => {
    setActiveSection(name)
    setLastClick(Date.now())
  }

  return (
    <nav className="fixed top-0 z-[999] shadow-xl w-screen">
      <div
        className={`pl-3 bg-blanco flex justify-between items-center
         fixed  h-[4.5rem] text-2xl shadow-xl  w-full pr-3`}>
        <Link href={'/'}>
          <Image
            src={'/Logo.png'}
            width={64}
            height={64}
            alt="Logo Eg Ecuestre Imagen"
          />
        </Link>
        <section className="flex items-center gap-2 text-sm md:text-lg">
          {
            Links.map(({ name, hash }) => (
              <Link
                key={hash}
                className={
                  cn("p-2 rounded-lg capitalize transition-colors hover:bg-orange-200/30 hover:text-gray-700 text-gray-500",
                    { "bg-orange-200/50 text-gray-900": activeSection === name })}
                onClick={() => handleSectionChange(name)}
                href={hash}>
                {name}
              </Link>
            ))
          }
        </section>
        <div />
      </div>
    </nav>
  )
}
