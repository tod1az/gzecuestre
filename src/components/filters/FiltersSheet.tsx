import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FcMenu } from "react-icons/fc"
import SearchBar from "../SearchBar"
import ActiveQuery from "./ActiveQuery"
import FilterList from "./FilterList"

export default function FiltersSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-4 text-4xl">
          <FcMenu />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-orange-200" side={'left'}>
        <section className="pl-2 grid gap-6 w-[312px]">
          <SearchBar />
          <ActiveQuery />
          <FilterList />
        </section>
      </SheetContent>
    </Sheet>
  )
}
