import { IoIosCloseCircle } from "react-icons/io";
import { useUrlSearchParams } from "@/lib/hooks";

type FilterBadgeProps = {
  name: string
  children: React.ReactNode
}

export default function FilterBadge({ name, children }: FilterBadgeProps) {
  const { deleteFilter } = useUrlSearchParams()
  return (
    <div
      className="text-xs font-bold h-[1.5rem] w-max flex items-center justify-center gap-2 px-2 pr-0  bg-orange-100 text-gray-600 rounded-full capitalize">
      {children}
      <button
        className="text-2xl"
        onClick={() => deleteFilter({ name })}
      >
        <div className="text-amber-700">
          <IoIosCloseCircle />
        </div>
      </button>
    </div>
  )
}
