'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FilterSlider } from "./FilterSlider"
import { useState } from "react"
import { useUrlSearchParams } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import FilterBadge from "./FilterBadges"
import { Separator } from "../ui/separator"

type Measurement = 'cm' | 'años' | '$'

type DialogRangeProps = {
  name: string
  maxRange: number
  step: number
  measurement: Measurement
}

type RangeStatus = 'default' | 'valid' | 'invalid'


export default function DialogRange({ name, maxRange, step, measurement }: DialogRangeProps) {

  const [open, setOpen] = useState(false)
  const [max, setMax] = useState('0')
  const [min, setMin] = useState('0')
  const [validRange, setValidRange] = useState<RangeStatus>('default')
  const { setFilter, isFilterActive } = useUrlSearchParams()

  const currentValue = isFilterActive(name)

  const handleSave = () => {
    if (Number(min) < Number(max)) {
      setValidRange('valid')
      setFilter({ name: `max${name}`, value: max })
      setFilter({ name: `min${name}`, value: min })
      setValidRange('valid')
      setOpen(!open)
    } else {
      setValidRange('invalid')
    }
  }

  return (
    <Popover
      open={open}
      modal
      onOpenChange={() => {
        setMin('0')
        setMax('0')
        setValidRange('default')
      }}
    >
      <div className="flex gap-2 items-center">
        <PopoverTrigger
          onClick={() => setOpen(true)}
          asChild className="text-xl capitalize text-gray-600  px-3 py-1   bg-blanco/50 rounded-xl">
          <button>
            {name}
          </button>
        </PopoverTrigger>
        {
          !!currentValue && (
            <FilterBadge name={name}>
              <BadgeValue values={currentValue} measurement={measurement} />
            </FilterBadge>)
        }
      </div>
      <PopoverContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[425px] flex flex-col items-start w-[14rem] ml-4 LandingSubTitle bg-blanco">
        <h2 className="capitalize font-bold w-full text-center" >{name}</h2>
        <Separator className="bg-black/20" />
        <section className="grid gap-6 w-full py-4 px-0">
          <Label>
            <SliderValue max={false} measurement={measurement} value={min} />
          </Label>
          <FilterSlider max={maxRange} step={step} onValueChange={(value) => setMin(String(value))} />
          <Label>
            <SliderValue max={true} measurement={measurement} value={max} />
          </Label>
          <FilterSlider max={maxRange} step={step} onValueChange={(value) => setMax(String(value))} />
        </section>
        <small
          className={cn("text-red-900 hidden", { "block": validRange === 'invalid' })}>
          El rango ingresado no es valido, intente nuevamente
        </small>
        <Button className="bg-orange-500 w-full mt-3" onClick={handleSave} type="submit">Guardar cambios</Button>
      </PopoverContent>
    </Popover>
  )
}

type SliderValueProps = {
  measurement: Measurement
  max: boolean
  value: string
}

function SliderValue({ measurement, max, value }: SliderValueProps) {
  const minText = 'Mínimo: '
  const maxText = 'Máximo: '
  if (measurement === '$') {
    return max
      ? `${maxText}${measurement}${value}`
      : `${minText}${measurement}${value}`
  }
  if (measurement === "cm") {
    return max
      ? `${maxText}${value}${measurement}`
      : `${minText}${value}${measurement}`
  }
  if (measurement === "años") {
    return max
      ? `${maxText}${value} ${measurement}`
      : `${minText}${value} ${measurement}`
  }


}

type BadgeValueProps = {
  measurement: Measurement
  values: [string, string]
}

function BadgeValue({ measurement, values }: BadgeValueProps) {
  const [min, max] = values
  if (measurement === "cm") {
    return `${min}${measurement} - ${max}${measurement}`
  }
  if (measurement === "$") {
    return `${measurement}${min} - ${measurement}${max}`
  }
  if (measurement === "años") {
    return `${min} ${measurement} - ${max} ${measurement}`
  }
}