import { cn } from "@/lib/utils"

type CardBadgeProps = {
  children: React.ReactNode
  className?: string
}

export default function CardBadge({ children, className }: CardBadgeProps) {
  return (
    <div className={cn("text-xs border-2 border-gris  px-1 rounded-full bg-marron/10", className)}>
      {children}
    </div>
  )
}
