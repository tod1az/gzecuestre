'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";

import { MdMenuOpen } from "react-icons/md";

type Props = {
  children: React.ReactNode
}

export default function FiltersSheet({ children }: Props) {
  const path = usePathname()
  if (path.startsWith('/horses')) {
    return <div />
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Filtros Button"
          className="group md:mr-7  mr-4 text-4xl gap-2 hover:text-negro text-gray-600 flex items-center transition-colors"
        >
          <p className="hidden text-xl md:block xl:text-xl pt-2 text-gray-600  group-hover:text-negro transition-colors">
            Filtros
          </p>
          <MdMenuOpen />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-orange-200  w-[312px]" side={'right'}>
        {children}
      </SheetContent>
    </Sheet>
  )
}