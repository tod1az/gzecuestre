'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useUrlSearchParams } from "@/lib/hooks"
import { FaChevronDown } from "react-icons/fa"
import FilterBadge from "../filters/FilterBadges"

type Option = {
  name: string,
  id: number
}

type DropDown2Props = {
  name: string
  items: Option[]
}

export default function DropDown2({ name, items }: DropDown2Props) {

  const { setFilter, getActiveFilter } = useUrlSearchParams()
  const currentValue = getActiveFilter(name)


  return (

    <DropdownMenu>
      <div className="flex gap-2">
        <DropdownMenuTrigger
          className="capitalize flex items-center gap-2 text-xl text-gray-600 border ps-3 py-1 px-1 border-none bg-blanco/50 rounded-xl">
          {name}<FaChevronDown />
        </DropdownMenuTrigger>
        {
          !!currentValue && (
            <FilterBadge name="sexo">
              {currentValue}
            </FilterBadge>
          )
        }
      </div>
      <DropdownMenuContent className="ml-4 bg-blanco">
        <DropdownMenuLabel className="capitalize">{name}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-black/15" />
        {
          items.map((item) => (
            <DropdownMenuItem
              className="capitalize"
              key={item.id}
              onClick={() => setFilter({ name, value: item.name })}
            >
              {item.name}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
