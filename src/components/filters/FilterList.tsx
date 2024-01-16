import { Sexos } from "@/lib/data";
import DropDown2 from "../ui/DropDown";
import DialogRange from "./DialogRange";
import { Orders } from "@/lib/data";

export default function FilterList() {
  return (
    <ul className="flex flex-col w-max  gap-9 justify-center items-start">
      <ul className="flex gap-[4rem]">
        <li><DropDown2 items={Sexos} name="sexo" /></li>
        <li><DropDown2 items={Orders} name="orden" /></li>
      </ul>
      <li><DialogRange name="edad" measurement="años" step={1} maxRange={30} /></li>
      <li><DialogRange name="precio" measurement="$" step={500} maxRange={100000} /></li>
      <li><DialogRange name="alzada" measurement="cm" step={1} maxRange={200} /></li>
      <li><DialogRange name="salto" measurement="cm" step={5} maxRange={160} /></li>
    </ul>
  )
}
