import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"


export default function SortsList() {
  return (
    <section>
      <RadioGroup
        className="p-5 bg-blanco/50 rounded-xl"
        defaultValue="ascendente">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="ascendente" id="ascendente" />
          <Label className="text-gray-600 text-xl capitalize" htmlFor="ascendente">ascendente</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="descendente" id="descendente" />
          <Label className="text-gray-600 text-xl capitalize" htmlFor="descendente">descendente</Label>
        </div>
      </RadioGroup>
      <RadioGroup
        className="mt-4 p-5 bg-blanco/50 rounded-xl"
        defaultValue="precio">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="precio" id="precio" />
          <Label className="text-gray-600 text-xl capitalize" htmlFor="precio">precio</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fecha" id="fecha" />
          <Label className="text-gray-600 text-xl " htmlFor="fecha">Fecha de publicación</Label>
        </div>
      </RadioGroup>
      <div className="flex justify-center gap-6 items-center mt-4 p-5 bg-blanco/50 rounded-xl">
        <Label className="text-gray-600 text-xl ">Activar</Label>
        <Switch className="bg-negro" />
      </div>
    </section>
  )
}
