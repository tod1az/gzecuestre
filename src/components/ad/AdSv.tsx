import { getSponsors } from "@/lib/querys"
import Ad from "./Ad"

export default async function AdSv({ location }: { location: number }) {
  const sponsors = await getSponsors()
  return (
    <Ad location={location} sponsors={sponsors} />
  )
}
