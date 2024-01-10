import { Skeleton } from "../ui/skeleton";

export default function NavLogoSkeleton() {
  return (
    <div className=" flex items-center gap-2 justify-center">
      <Skeleton className="w-[64px] h-[64px]" />
      <Skeleton className="w-[200px] h-[64px]" />
    </div>
  )
}

