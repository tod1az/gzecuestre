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

type Option = {
  nombre: string
  id: string
}

type MultipleOptionProps = {
  items: Option[]
  name: string
}
export default function MultipleOption({ items, name }: MultipleOptionProps) {

  const { setFilter, getActiveFilter } = useUrlSearchParams()
  const currentValue = getActiveFilter(name)

  const handleSelect = (province: { nombre: string, id: string }) => {
    if (!currentValue) {
      return setFilter({ name: name, value: province.id })
    }
    if (!currentValue.includes(province.id)) {
      return setFilter({ name: name, value: `${currentValue}&${province.id}` })
    }
  }

  return (
    <DropdownMenu>
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center gap-1">
          <DropdownMenuTrigger
            className="capitalize flex w-max pr-1 h-[2.5rem] items-center gap-2 text-xl text-gray-600 border ps-3 py-1 px-1 border-none bg-blanco/50 rounded-xl">
            {name}
            <FaChevronDown />
          </DropdownMenuTrigger>
          <div className="text-gray-600 text-xl bg-blanco/50 flex rounded-full">
            <FilterHoverCard name={name} />
          </div>
        </div>
        {
          currentValue && <BadgeList selectedItems={currentValue} name={name} allItems={items} />
        }
      </div>
      <DropdownMenuContent className="ml-4 bg-blanco ">
        <DropdownMenuLabel className="capitalize">
          {name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-black/15" />
        <ScrollArea className="h-[10rem]">
          {
            items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => handleSelect(item)
                }
              >
                {item.nombre}
              </DropdownMenuItem>
            ))
          }
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function BadgeList({ selectedItems, allItems, name }:
  {
    selectedItems: string
    allItems: Option[]
    name: string
  }) {
  if (!selectedItems.length) return null
  if (selectedItems.length && !selectedItems.includes('&')) {
    const currentItem = allItems.find((item) => item.id === selectedItems)
    return (
      <ProvinceFilterBadge item={currentItem as Option} name={name} />
    )
  }
  return (
    <section className="flex flex-wrap gap-2">
      {
        selectedItems.split('&').map((id) => {
          const selectedItem = allItems.find((item) => item.id === id)
          return <ProvinceFilterBadge key={selectedItem?.id} name={name} item={selectedItem as Option} />
        }
        )
      }
    </section>
  )
}

function ProvinceFilterBadge({ item, name }: { item: Option, name: string }) {
  const { deleteFilterValues } = useUrlSearchParams()
  return (
    <div
      className="text-xs font-bold h-[1.5rem] w-max whitespace-nowrap flex items-center justify-center gap-2 px-2 pr-0  bg-orange-100 text-gray-600 rounded-full capitalize">
      {item.nombre}
      <button
        className="text-2xl"
        onClick={() => deleteFilterValues({ value: item.id, name })}
      >
        <div className="text-amber-700">
          <IoIosCloseCircle />
        </div>
      </button>
    </div>
  )
}