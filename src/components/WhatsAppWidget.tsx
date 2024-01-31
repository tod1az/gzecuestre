import Link from "next/link";
import WhatsAppLogo from "./logos/WhatsAppLogo";
import WhatsappHoverCard from "./WhatsappHoverCard";

type Props = {
  href: string
}

export default function WhatsAppWidget({ href }: Props) {
  return (
    <Link
      aria-label="WhatsApp Contact Link"
      href={href}
      target="_blank"
      className={`fixed flex items-center hover:scale-125 transition-transform
    bottom-5 right-4 xl:right-16`}  >
      <WhatsappHoverCard>
        <div className="hidden md:block ">
          <WhatsAppLogo size="70" />
        </div>
        <div className="block md:hidden">
          <WhatsAppLogo size="50" />
        </div>
      </WhatsappHoverCard>
    </Link>
  )
}
