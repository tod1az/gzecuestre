import CardSkeleton from "./CardSkeleton";

export default function CardsSkeleton() {
  return (
    <div className="grid grid-cols-2 mt-[4.5rem]  gap-[1rem] rounded-lg xl:grid-cols-4 md:grid-cols-3 justify-center gap-x-5  md:gap-x-[1rem] md:gap-y-[1rem] mb-[10rem]">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}
