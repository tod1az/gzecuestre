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
import Video from "./Video"



type DetailCarouselProps = {
  name: string
  items: ({ imageRoute: string })[]
}

export default function DetailCarousel({ items, name }: DetailCarouselProps) {
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
                <CardContent className="flex object-cover w-full  h-[25rem] items-center justify-center p-0">
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
        <CarouselItem className="rounded-lg">
          <Card className="bg-black border-none flex justify-center ">
            <CardContent className="w-auto  h-[25rem]">
              <Video id={'P4jKxFhnjAU'} name={name} height="400" width="600" />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel >
  )
}
