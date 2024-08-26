import { getSponsors } from "@/lib/querys"
import Ad from "./Ad"

export default async function AdSv({ location }: { location: number }) {
  const sponsors = await getSponsors()
  if (sponsors.length === 0) return null
  return <Ad location={location} sponsors={sponsors} />
}
