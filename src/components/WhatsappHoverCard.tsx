'use client'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function WhatsappHoverCard({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="flex items-center w-max h-[1rem]">
        Publica tu caballo
      </HoverCardContent>
    </HoverCard>
  )
}
