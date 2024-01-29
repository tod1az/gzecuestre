'use client'
import { usePathname, useRouter } from "next/navigation"
import { IoMdArrowBack } from "react-icons/io"
import { FaHome } from "react-icons/fa";

export default function HomeNavigation() {
  const path = usePathname()
  const { back, push } = useRouter()
  if (path.startsWith('/horses')) {
    return (
      <button
        aria-label="Back Button"
        onClick={() => back()}
        className="ml-3 md:ml-4 text-2xl md:text-xl  flex gap-0 md:gap-2 text-gray-600 transition-colors items-center  hover:text-negro" >
        <IoMdArrowBack />
        <p className="hidden md:block">
          Volver
        </p>
      </button >
    )
  }
  return (
    <button
      aria-label="Inicio Button"
      onClick={() => push('/')}
      className="group ml-3  items-start md:ml-4 text-3xl xl:text-3xl flex gap-0 md:gap-2 transition-colors text-gray-600 hover:text-negro" >
      <FaHome />
      <p className="text-xl pt-1 hidden md:block">
        Inicio
      </p>
    </button >
  )
}
