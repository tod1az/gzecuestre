import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IoMdInformationCircleOutline } from "react-icons/io"

type FilterHoverCardProps = {
  name: string
}

export default function FilterHoverInfo({ name }: FilterHoverCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><IoMdInformationCircleOutline /></TooltipTrigger>
        <TooltipContent className="bg-blanco text-gray-600">
          <p className="flex gap-1">Puedes seleccionar multiples <p className="capitalize">{name}</p></p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
