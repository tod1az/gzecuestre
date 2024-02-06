import Link from "next/link"
import Logo from "../logos/Logo"
import { InstagramIcon, YoutubeIcon } from "./Socials"
import FooterOptionalLinks from "./FooterOptionalLinks"

export function Footer() {

  return (
    <footer className="bg-orange-100/50 LandingSubTitle py-6 px-4 md:px-6">
      <div className="container mx-auto items-center grid grid-cols-2 md:grid-cols-4 gap-4 gap-x-14 md:gap-x-24 md:gap-6">
        <Logo />
        <nav className="flex flex-col gap-2 xl:flex-row">
          <FooterOptionalLinks />
          <Link className="text-sm hover:underline" href="/#contact">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            aria-label="Instagram Link"
            className="LandingSubTitle hover:text-pink-500"
            target="_blank"
            href="https://www.instagram.com/gz.ecuestre/">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link
            aria-label="Youtube Link"
            className="LandingSubTitle hover:text-red-600" href="https://www.youtube.com/channel/UCYf9_B81VDi2igBUSHcu6dw">
            <YoutubeIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">© GZ Ecuestre. Todos los derechos reservados.</div>
    </footer>
  )
}



