'use client'
import LandingCarousel from "./LandingCarousel";
import LandingHeader from "./LangingHeader";
import { sponsors } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type SponsorsProps = {
  children: React.ReactNode
}

export default function Sponsors({ children }: SponsorsProps) {
  const { ref } = useSectionInView('auspiciantes')
  return (
    <section
      ref={ref}
      id="sponsors"
      className="scroll-m-[4rem] flex flex-col items-center gap-[6rem]  xl:gap-[5rem] h-[91.5vh] md:h-[93vh] xl:h-[92.05vh] w-full">
      <LandingHeader>
        Auspiciantes
      </LandingHeader >
      {children}
    </section>
  )
}
