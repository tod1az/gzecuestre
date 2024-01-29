'use client'
import { useSectionInView } from '@/lib/hooks'
import LandingHeader from './LangingHeader'

type FeaturedSectionProps = {
  children: React.ReactNode
}

export default function FeaturedSection({ children }: FeaturedSectionProps) {
  const { ref } = useSectionInView('destacado')
  return (
    <section
      ref={ref}
      id="featured"
      className="md:scroll-m-[4rem] scroll-m-[6rem] flex flex-col items-center justify-start gap-[6rem]  xl:gap-[5rem] h-[91.5vh] md:h-[93vh] xl:h-[92.05vh] w-full">
      <LandingHeader>
        Ingresados Recientemente
      </LandingHeader>
      {children}
    </section>
  )
}
