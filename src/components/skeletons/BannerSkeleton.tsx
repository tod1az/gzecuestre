import { Skeleton } from "../ui/skeleton"

export default function BannerSkeleton() {
  return (
    <div className="pt-6 w-[22rem] md:w-[45rem] xl:w-[60rem] flex flex-col gap-2 py-2 mb-[6rem]">
      <Skeleton className="h-[360px] w-full " />
    </div>
  )
}
