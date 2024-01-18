'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "./scroll-area"
import { cn } from "@/lib/utils"
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
  vertical?: boolean
}

export default function DropDown2({ name, items, vertical }: DropDown2Props) {

  const { setFilter, getActiveFilter } = useUrlSearchParams()
  const currentValue = getActiveFilter(name)
  const itemsLength = items.length

  return (

    <DropdownMenu>
      <div className={cn("flex flex-col gap-7", { "flex-row": !vertical })}>
        <DropdownMenuTrigger
          className="capitalize flex items-center gap-2 text-xl text-gray-600 border ps-3 py-1 px-1 border-none bg-blanco/50 rounded-xl">
          {name}<FaChevronDown />
        </DropdownMenuTrigger>
        {
          !!currentValue && (
            <FilterBadge name={name}>
              {currentValue}
            </FilterBadge>
          )
        }
      </div>
      <DropdownMenuContent className="ml-4 bg-blanco">
        <DropdownMenuLabel className="capitalize">{name}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-black/15" />
        {
          itemsLength > 5
            ? (
              <ScrollArea className="h-[10rem]">
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
              </ScrollArea>
            )
            : (
              <>
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
              </>
            )
        }
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
