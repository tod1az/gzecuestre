'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FcMenu } from "react-icons/fc"
import { usePathname } from "next/navigation"

type Props = {
  children: React.ReactNode
}

export default function FiltersSheet({ children }: Props) {
  const path = usePathname()
  if (path.startsWith('/horses')) return <div />
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
