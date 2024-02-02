'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import Link from "next/link"

type AdCarouselProps = {
  sponsors: {
    id: string;
    nombre: string;
    logo: string;
    url: string;
  }[]
}

export default function AdCarousel({ sponsors }: AdCarouselProps) {
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
            sponsors.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="bg-black border-none flex justify-center overflow-hidden ">
                  <Link
                    target="_blank"
                    href={item.url}>
                    <CardContent className="flex object-cover w-full  h-[10rem] md:h-[15rem] items-center justify-center p-0">
                      <Image
                        className="px-6 w-auto h-[10rem] md:h-[15rem] object-cover"
                        src={item.logo}
                        width={500}
                        height={100}
                        quality={95}
                        alt={item.nombre}
                      />
                    </CardContent>
                  </Link>
                </Card>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
    </section>
  )
}
