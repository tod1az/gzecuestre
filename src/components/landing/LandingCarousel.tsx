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

import Image from "next/image"

type Item = {
  imageRoute: string
}

type LandginCarouselProprs = {
  items: Item[]
}

export default function LandingCarousel({ items }: LandginCarouselProprs) {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="max-w-sm  xl:max-w-6xl">
      <CarouselContent>
        {
          items.map((item) => (
            <CarouselItem key={item.imageRoute} className="xl:basis-1/3 ">
              <Card className="bg-blanco">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    className="w-full h-full object-cover rounded-lg"
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
