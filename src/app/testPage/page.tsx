"use client"
import { Provinces } from "@/lib/data";
import * as React from "react"
import { FaCheck as Check } from "react-icons/fa6";
import { LuChevronsUpDown as ChevronsUpDown } from "react-icons/lu";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="text-xl capitalize text-gray-600  px-3 py-2   bg-blanco/50 rounded-xl"
        >
          {value
            ? Provinces.find((province) => province.id === value)?.name
            : "Provincias"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[12.5rem] ml-4 p-0">
        <Command>
          <CommandInput placeholder="Buscar provincia..." />
          <CommandEmpty>No se encontró la provincia.</CommandEmpty>
          <ScrollArea className="h-[10rem] w-[12.5rem]">
            <CommandGroup>
              {Provinces.map((province) => (
                <CommandItem
                  key={province.id}
                  value={province.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    console.log(province.name, currentValue)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 opacity-0",
                      { "opacity-100": value === province.id }
                    )}
                  />
                  {province.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
