'use client'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'
import { useUrlSearchParams } from '@/lib/hooks'

type PaginationProps = {
  totalItems: number
}

export default function Pagination({ totalItems }: PaginationProps) {
  const { setPage, getCurrentPage } = useUrlSearchParams()
  const perPage = 20
  const totalPages = Math.trunc(totalItems / perPage)
  const initialPage = getCurrentPage(totalPages)

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  if (totalPages === 1) return null

  return (
    <ResponsivePagination
      total={totalPages}
      current={initialPage}
      onPageChange={(page: number) => handlePageChange(page)}
    />
  )
}
