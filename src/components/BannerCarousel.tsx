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

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

type Item = {
  imageRoute: string
}

type LandginCarouselProprs = {
  items: Item[]
}

export default function BannerCarousel({ items }: LandginCarouselProprs) {

  const plugin = useRef(
    Autoplay({
      delay: 2500, stopOnInteraction: true
    })
  )

  return (
    <section
      className="flex flex-col w-full pt-6 items-center justify-center mb-8">
      <Carousel
        plugins={[
          plugin.current
        ]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-[22rem] md:w-[45rem] xl:w-[60rem] h-auto  mb-[6rem]">
        <h2 className="p-5 text-xl place-self-start md:text-3xl text-left text-negro rounded-b-full">Novedades</h2>
        <CarouselContent>
          {
            items.map((item) => (
              <CarouselItem key={item.imageRoute} className="">
                <Card className="bg-blanco flex justify-center ">
                  <CardContent className="flex object-cover w-full  h-[20rem] items-center justify-center p-0">
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
        <CarouselNext className="hover:bg-orange-200 bg-blanco shadow-lg hidden xl:flex" />
        <CarouselPrevious className="hover:bg-orange-200 bg-blanco shadow-lg hidden xl:flex" />
      </Carousel>
    </section>
  )
}