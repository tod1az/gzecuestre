import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

type Item = {
  id: string;
  imagenes: string[];
};

type SponsorItem = {
  logo: string;
  url: string;
  nombre: string;
  id: string;
};

type LandginCarouselProprs = {
  items?: Item[];
  sponsors?: SponsorItem[];
};

export default function LandingCarousel({
  items,
  sponsors,
}: LandginCarouselProprs) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="max-w-sm  xl:max-w-6xl"
    >
      <CarouselContent>
        {items
          ? items.map((item) => {
              return item.imagenes[0] ? (
                <CarouselItem key={item.id} className="xl:basis-1/3 ">
                  <Card className="bg-blanco">
                    <Link href={`/horses/${item.id}`}>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          className="w-full h-full object-cover rounded-lg"
                          src={item.imagenes[0]}
                          width={500}
                          height={100}
                          quality={95}
                          alt={`${item.id}`}
                        />
                      </CardContent>
                    </Link>
                  </Card>
                </CarouselItem>
              ) : null;
            })
          : sponsors &&
            sponsors.map((sponsor) => (
              <CarouselItem key={sponsor.id} className="xl:basis-1/3 ">
                <Card className="bg-blanco">
                  <Link target="_blank" href={sponsor.url}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={sponsor.logo}
                        width={500}
                        height={100}
                        quality={95}
                        alt={`${sponsor.nombre}`}
                      />
                    </CardContent>
                  </Link>
                </Card>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
