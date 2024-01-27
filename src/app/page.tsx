import Hero from "@/components/landing/HeroSection"
import LandingNavBar from "@/components/landing/LandingNavBar"
import FeaturedSection from "@/components/landing/FeaturedSection"
import Sponsors from "@/components/landing/SponsorsSection"
import ContactSection from "@/components/landing/ContactSection"
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext"
import About from "@/components/landing/About"

export default function Home() {
  return (
    <main
      className="flex flex-col mt-[4.5rem] overflow-auto w-full  bg-gradient-to-br from-orange-300 to orange-100" >
      <ActiveSectionContextProvider>
        <LandingNavBar />
        <Hero />
        <FeaturedSection />
        <Sponsors />
        <About />
        <ContactSection />
      </ActiveSectionContextProvider>
    </main>
  )
}
