'use client'
import Image from "next/image"
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

type DetailCarouselProps = {
  items: ({ imageRoute: string })[]
}

export default function DetailCarousel({ items }: DetailCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: 'true'
      }}
    >
      <CarouselContent>
        {
          items.map((item) => (
            <CarouselItem key={item.imageRoute} className="rounded-lg overflow-hidden">
              <Card className="bg-black border-none flex justify-center ">
                <CardContent className="flex object-cover w-full h-[15rem] md:h-[25rem] items-center justify-center p-0">
                  <Image
                    className="w-auto h-full object-cover"
                    src={item.imageRoute}
                    width={500}
                    height={100}
                    quality={95}
                    alt="caballo destacado"
                  />
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
