import Link from "next/link";
import WhatsAppLogo from "./logos/WhatsAppLogo";

export default function WhatsAppWidget() {
  return (
    <Link
      href={'https://walink.co/a1faab'}
      target="_blank"
      className={`fixed flex items-center hover:scale-125 transition-transform
       bottom-5 right-4 xl:right-16`}  >
      <div className="hidden md:block ">
        <WhatsAppLogo size="70" />
      </div>
      <div className="block md:hidden">
        <WhatsAppLogo size="50" />
      </div>
    </Link>
  )
}
