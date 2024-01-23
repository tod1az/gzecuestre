'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "../ui/scroll-area"
import { useUrlSearchParams } from "@/lib/hooks"
import { FaChevronDown } from "react-icons/fa"
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import FilterHoverCard from "./FilterHoverInfo"

type ProvinceFilterProps = {
  provinces: {
    nombre: string
    id: string
  }[]
}
export default function ProvinceFilter({ provinces }: ProvinceFilterProps) {
  const name = {
    internal: '',
    external: 'provincias'
  }
  const { setFilter, getActiveFilter } = useUrlSearchParams()
  const currentValue = getActiveFilter(name.internal)

  const handleSelect = (value: string) => {
    if (!currentValue) {
      return setFilter({ name: name.internal, value })
    }
    if (!currentValue.includes(value)) {
      return setFilter({ name: name.internal, value: `${currentValue}&${value}` })
    }
  }


  return (

    <DropdownMenu>
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center gap-1">
          <DropdownMenuTrigger
            className="capitalize flex w-[9rem] h-[2.5rem] items-center gap-2 text-xl text-gray-600 border ps-3 py-1 px-1 border-none bg-blanco/50 rounded-xl">
            {name.external}
            <FaChevronDown />
          </DropdownMenuTrigger>
          <div className="text-gray-600 text-xl bg-blanco/50 flex rounded-full">
            <FilterHoverCard>
              <IoMdInformationCircleOutline />
            </FilterHoverCard>
          </div>
        </div>
        {
          currentValue && <BadgeList items={currentValue} />
        }
      </div>
      <DropdownMenuContent className="ml-4 bg-blanco ">
        <DropdownMenuLabel>
          Provincias
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-black/15" />
        <ScrollArea className="h-[10rem]">
          {
            provinces.map((province) => (
              <DropdownMenuItem
                key={province.id}
                onClick={() => handleSelect(province.id)
                }
              >
                {province.nombre}
              </DropdownMenuItem>
            ))
          }
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

function BadgeList({ items }:
  {
    items: string
  }) {
  if (!items.length) return null
  if (items.length && !items.includes('&')) {
    return (
      <ProvinceFilterBadge province={items} />
    )
  }
  return (
    <section className="flex flex-wrap gap-2">
      {
        items.split('&').map((province) => (
          <ProvinceFilterBadge key={province} province={province} />
        ))
      }
    </section>
  )
}


function ProvinceFilterBadge({ province }: { province: string }) {
  const { deleteProvince } = useUrlSearchParams()
  return (
    <div
      className="text-xs font-bold h-[1.5rem] w-max whitespace-nowrap flex items-center justify-center gap-2 px-2 pr-0  bg-orange-100 text-gray-600 rounded-full capitalize">
      {province}
      <button
        className="text-2xl"
        onClick={() => deleteProvince(province)}
      >
        <div className="text-amber-700">
          <IoIosCloseCircle />
        </div>
      </button>
    </div>
  )
}
