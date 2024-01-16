'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FilterSlider } from "./FilterSlider"
import { useEffect, useState } from "react"
import { useUrlSearchParams } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import FilterBadge from "./FilterBadges"

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

  useEffect(() => {
    if (!open) {
      setMin('0')
      setMax('0')
      setValidRange('default')
    }
  }, [open])

  return (
    <Popover open={open} >
      <div className="flex gap-2">
        <PopoverTrigger asChild className="text-xl capitalize text-gray-600  px-3 py-1   bg-blanco/50 rounded-xl">
          <button onClick={() => setOpen(!open)} >
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
      <PopoverContent className="sm:max-w-[425px] ml-4 LandingSubTitle bg-orange-100">
        <h2 className="capitalize" >{name}</h2>
        <section className="grid gap-4 py-4">
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
        <Button className="bg-orange-500" onClick={handleSave} type="submit">Guardar cambios</Button>
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
      : `${maxText}${value}${measurement}`
  }
  if (measurement === "años") {
    return max
      ? `${maxText}${value} ${measurement}`
      : `${maxText}${value} ${measurement}`
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