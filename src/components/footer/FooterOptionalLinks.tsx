'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FooterOptionalLinks() {

  const path = usePathname()
  if (path === '/') {
    return (
      <Link className="text-sm hover:underline" href="/home">
        Catálogo
      </Link>
    )
  }
  if (path === '/about' || path.startsWith('/horses')) {
    return (
      <>
        <Link className="text-sm hover:underline" href="/">
          Inicio
        </Link>
        <Link className="text-sm hover:underline" href="/home">
          Catálogo
        </Link>
      </>
    )
  }

  return (
    <Link className="text-sm hover:underline" href="/">
      Inicio
    </Link>
  )

}