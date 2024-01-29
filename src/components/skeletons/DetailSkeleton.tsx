import { Skeleton } from "../ui/skeleton"
export default function DetailSkeleton() {
  return (
    <div className="w-full flex flex-col gap-8 items-center pt-6">
      <Skeleton className=" h-[20rem] w-3/4" />
      <div className="flex flex-col gap-5 items-start  w-3/4">
        <Skeleton className="h-[4rem] w-[16rem] " />
        <Skeleton className="h-[3rem] w-[8rem] " />
        <Skeleton className="h-[2rem] w-[22rem] " />
        <div className="flex gap-[10rem]">
          <Skeleton className="w-[8rem] h-[3rem]" />
          <Skeleton className="w-[8rem] h-[3rem]" />
        </div>
        <Skeleton className="h-[1rem] w-full" />
        <Skeleton className="h-[1rem] w-full" />
      </div>
    </div>
  )
}
