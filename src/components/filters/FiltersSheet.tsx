'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FcMenu } from "react-icons/fc"
import SearchBar from "../SearchBar"
import ActiveQuery from "./ActiveQuery"
import FilterList from "./FilterList"
import { usePathname } from "next/navigation"

export default function FiltersSheet() {
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
        <section className="md:pl-2 flex flex-col gap-4 pt-5  w-full">
          <SearchBar />
          <ActiveQuery />
          <FilterList />
        </section>
      </SheetContent>
    </Sheet>
  )
}
