export default function CardBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs border-2 border-gris p-1 rounded-full bg-marron/10">
      {children}
    </div>
  )
}
