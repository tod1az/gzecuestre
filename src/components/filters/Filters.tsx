import SearchBar from "../SearchBar"
import DialogRange from "./DialogRange";
import { useUrlSearchParams } from "@/lib/hooks";
import FilterBadge from "./FilterBadges";
export default function Filters() {
  const { getActiveQuery } = useUrlSearchParams()

  const activeQuery = getActiveQuery()
  return (
    <article className="py-5 px-4 flex flex-col gap-6 w-80 h-full items-start shadow-xl">
      <SearchBar />
      <ul className="flex flex-col w-max  gap-4 md:gap-9 justify-center items-start">
        <li><DialogRange name="edad" step={1} maxRange={30} /></li>
        <li><DialogRange name="precio" step={500} maxRange={100000} /></li>
      </ul>
      <br />
      {
        !!activeQuery && <FilterBadge name="query" >{activeQuery}</FilterBadge>
      }
    </article>
  )
}
