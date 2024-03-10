import { Sexos } from "@/lib/data";
import DropDown2 from "../ui/DropDown";
import DialogRange from "./DialogRange";
import { Orders } from "@/lib/data";
import { getBreeds, getProvinces, getDisciplines } from "@/lib/querys";
import { Separator } from "../ui/separator";
import MultipleOption from "./MultipleOption";

export default async function FilterList() {
  const breeds = await getBreeds();
  const provinces = await getProvinces();
  const disciplines = await getDisciplines();
  return (
    <ul className="flex flex-col w-full  gap-4 justify-center items-start">
      <Separator className="bg-black/20" />
      <ul className="flex gap-[3rem]">
        <li>
          <DropDown2 items={Sexos} name="sexo" vertical />
        </li>
        {/* <li>
          <DropDown2 items={Orders} name="orden" vertical />
        </li> */}
      </ul>
      <Separator className="bg-black/20" />
      <li>
        <MultipleOption items={provinces} name="provincias" />
      </li>
      <Separator className="bg-black/20" />
      {/* <li>
        <MultipleOption items={disciplines} name="disciplinas" />
      </li> */}
      {/* <Separator className="bg-black/20" /> */}
      {/* <li>
        <MultipleOption items={breeds} name="razas" />
      </li> */}
      {/* <Separator className="bg-black/20" /> */}
      <li>
        <DialogRange name="edad" measurement="años" step={1} maxRange={30} />
      </li>
      <Separator className="bg-black/20" />
      {/* <li><DialogRange name="precio" measurement="$" step={500} maxRange={100000} /></li>
      <Separator className="bg-black/20" />
      <li><DialogRange name="alzada" measurement="cm" step={1} maxRange={200} /></li>
      <Separator className="bg-black/20" />
      <li><DialogRange name="salto" measurement="cm" step={5} maxRange={160} /></li>
      <Separator className="bg-black/20" /> */}
    </ul>
  );
}
