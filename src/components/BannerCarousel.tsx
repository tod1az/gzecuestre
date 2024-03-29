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
import Link from "next/link"

type Item = {
  id: string
  imagenes: string[]
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

        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-[22rem] md:w-[45rem] xl:w-[60rem] h-auto  mb-[6rem]">
        <CarouselContent>
          {
            items.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="bg-black border-none flex justify-center overflow-hidden ">
                  <Link href={`/horses/${item.id}`}>
                    <CardContent className="flex object-cover w-full  h-[20rem] items-center justify-center p-0">
                      <Image
                        className="px-6 w-auto h-[20rem] object-cover"
                        src={item.imagenes[0]}
                        width={500}
                        height={100}
                        quality={95}
                        alt="caballo destacado"
                      />
                    </CardContent>
                  </Link>
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
