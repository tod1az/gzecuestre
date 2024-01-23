import { getHorse } from "@/lib/querys"
import { type Metadata } from "next"

type Props = {
  params: { id: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = params.id
  const horse = await getHorse(id)
  return {
    title: `GZ ECUESTRE | ${horse?.nombre}`
  }
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
