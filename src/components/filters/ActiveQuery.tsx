'use client'
import { useUrlSearchParams } from "@/lib/hooks"
import FilterBadge from "./FilterBadges"

export default function Query() {
  const { getActiveFilter } = useUrlSearchParams()
  const currentQuery = getActiveFilter('query')
  if (!currentQuery) {
    return null
  }
  return (
    <FilterBadge name="query" >{currentQuery}</FilterBadge>
  )
}
