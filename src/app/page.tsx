import Hero from "@/components/landing/HeroSection"
import LandingNavBar from "@/components/landing/LandingNavBar"
import FeaturedSection from "@/components/landing/FeaturedSection"
import Sponsors from "@/components/landing/SponsorsSection"
import ContactSection from "@/components/landing/ContactSection"
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext"
import About from "@/components/landing/About"
import LandingCarousel from "@/components/landing/LandingCarousel"
import { getLastHorses, getSponsors } from "@/lib/querys"

export default async function Home() {
  const lastFive = await getLastHorses()
  const sponsors = await getSponsors()
  return (
    <main className="flex flex-col mt-[4.5rem] overflow-auto w-full  bg-gradient-to-br from-orange-300 to orange-100">
      <ActiveSectionContextProvider>
        <LandingNavBar />
        <Hero />
        <FeaturedSection>
          <LandingCarousel items={lastFive} />
        </FeaturedSection>
        {sponsors.length > 0 && (
          <Sponsors>
            <LandingCarousel sponsors={sponsors} />
          </Sponsors>
        )}
        <About />
        <ContactSection />
      </ActiveSectionContextProvider>
    </main>
  )
}
