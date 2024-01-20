'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FcMenu } from "react-icons/fc"
import { usePathname, useRouter } from "next/navigation"
import { IoArrowBack } from "react-icons/io5";

type Props = {
  children: React.ReactNode
}

export default function FiltersSheet({ children }: Props) {
  const path = usePathname()
  const { back } = useRouter()

  if (path.startsWith('/horses')) {
    return (
      <button
        onClick={() => back()}
        className="ml-3 md:ml-4 text-lg flex gap-0 md:gap-2 text-gray-600 items-center hover:underline hover:text-negro" >
        <IoArrowBack /> Volver
      </button >
    )
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-4 text-4xl">
          <FcMenu />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-orange-200  w-[312px]" side={'left'}>
        {children}
      </SheetContent>
    </Sheet>
  )
}