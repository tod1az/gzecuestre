'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Video from "./Video"

type DetailCarouselProps = {
  items: string[]
  name: string
}

export default function VideoCarousel({ items, name }: DetailCarouselProps) {
  if (items.length === 0) return null
  return (
    <Carousel
      opts={{
        loop: 'true'
      }}
    >
      <h2 className="text-negro py-6 text-2xl md:text-4xl font-bold">Videos</h2>
      <CarouselContent>
        {
          items.map((item) => (
            <CarouselItem key={item} className="rounded-lg overflow-hidden">
              <Card className="bg-black border-none ">
                <CardContent className=" object-cover w-full h-[15rem] md:h-[25rem] flex items-center justify-center ">
                  <Video id={item} name={name} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex md:items-center" />
      <CarouselNext className="hidden md:flex md:items-center" />
    </Carousel >
  )
}
