import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function FilterSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[0]}
      className={cn("w-[90%]", className)}
      {...props}
    />
  )
}