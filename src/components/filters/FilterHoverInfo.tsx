import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type FilterHoverCardProps = {
  children: React.ReactNode
}

export default function FilterHoverInfo({ children }: FilterHoverCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="bg-blanco text-gray-600">
          <p>Puede seleccionar más de una provincia</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
