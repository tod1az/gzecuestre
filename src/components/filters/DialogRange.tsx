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

type DialogRangeProps = {
  name: string
  maxRange: number
  step: number
}

type RangeStatus = 'default' | 'valid' | 'invalid'

export default function DialogRange({ name, maxRange, step }: DialogRangeProps) {

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
    } else {
      setValidRange('invalid')
    }
  }

  return (
    <Popover
      onOpenChange={
        (open) => {
          if (!open) {
            setMin('0')
            setMax('0')
            setValidRange('default')
          }
        }} >
      <div className="flex gap-2">
        <PopoverTrigger asChild className="text-xl capitalize text-gray-600  px-3 py-1   bg-blanco/50 rounded-xl">
          <button >
            {name}
          </button>
        </PopoverTrigger>
        {
          !!currentValue && (<FilterBadge name={name}>
            {`${currentValue[0]} - ${currentValue[1]}`}
          </FilterBadge>)
        }
      </div>
      <PopoverContent className="sm:max-w-[425px] ml-4 LandingSubTitle bg-orange-100">
        <h2 className="capitalize" >{name}</h2>
        <section className="grid gap-4 py-4">
          <Label>{`Mínimo: ${min}`}</Label>
          <FilterSlider max={maxRange} step={step} onValueChange={(value) => setMin(String(value))} />
          <Label>{`Máximo: ${max}`}</Label>
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