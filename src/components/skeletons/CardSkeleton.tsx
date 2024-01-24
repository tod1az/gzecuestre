import { Skeleton } from "../ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className=" flex flex-col gap-2 h-[18rem] w-[11rem] overflow-hidden  md:h-[20rem] md:w-[14rem] rounded-xl bg-orange-200">
      <Skeleton className="h-[50%]" />
      <div className="flex flex-col gap-1 w-full  pl-4">
        <Skeleton className="h-[2rem] w-[4rem]" />
        <Skeleton className="h-[2rem] w-[4rem]" />
      </div>
      <div className="flex gap-2 px-7">
        <Skeleton className="h-[2rem] w-[3rem]" />
        <Skeleton className="h-[2rem] w-[3rem]" />
        <Skeleton className="h-[2rem] w-[3rem]" />
      </div>
    </div>
  )
}
