import { Sexos } from "@/lib/data";
import DropDown2 from "../ui/DropDown";
import DialogRange from "./DialogRange";

export default function FilterList() {
  return (
    <ul className="flex flex-col w-max  gap-9 justify-center items-start">
      <li><DialogRange name="edad" step={1} maxRange={30} /></li>
      <li><DialogRange name="precio" step={500} maxRange={100000} /></li>
      <li><DialogRange name="alzada" step={1} maxRange={180} /></li>
      <li><DropDown2 items={Sexos} name="sexo" /></li>
    </ul>
  )
}
