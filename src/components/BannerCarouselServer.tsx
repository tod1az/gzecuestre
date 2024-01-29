import { getFeaturedHorses } from "@/lib/querys";
import BannerCarousel from "./BannerCarousel";

export default async function BannerCarouselServer() {
  const featuredHorses = await getFeaturedHorses()
  return (
    <BannerCarousel items={featuredHorses} />
  )
}
