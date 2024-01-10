'use client'
import LandingCarousel from './LandingCarousel'
import LandingHeader from './LangingHeader'
import { featuredHorses } from '../../lib/data'
import { useSectionInView } from '@/lib/hooks'

export default function FeaturedSection() {
  const { ref } = useSectionInView('destacado')
  return (
    <section
      ref={ref}
      id="featured"
      className="scroll-m-[10rem] flex flex-col items-center justify-start gap-[6rem]  xl:gap-[5rem] h-[91.5vh] md:h-[93vh] xl:h-[92.05vh] w-full">
      <LandingHeader>
        Ingresados Recientemente
      </LandingHeader>
      <LandingCarousel items={featuredHorses} />
    </section>
  )
}
