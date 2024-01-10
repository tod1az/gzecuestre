import Link from "next/link"
import Logo from "../logos/Logo"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./Socials"
import FooterOptionalLinks from "./FooterOptionalLinks"

export function Footer() {

  return (
    <footer className="bg-orange-100/50 LandingSubTitle py-6 px-4 md:px-6">
      <div className="container mx-auto items-center grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <Logo />
        <nav className="space-y-2 md:space-y-0 md:space-x-4">
          <FooterOptionalLinks />
          <Link className="text-sm hover:underline" href="/about">
            Nosotros
          </Link>
          <Link className="text-sm hover:underline" href="#contact">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link className="LandingSubTitle hover:text-blue-500" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link className="LandingSubTitle hover:text-pink-500" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link className="LandingSubTitle hover:text-blue-400" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link className="LandingSubTitle hover:text-red-600" href="#">
            <YoutubeIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">© GZ Ecuestre. Todos los derechos reservados.</div>
    </footer>
  )
}



