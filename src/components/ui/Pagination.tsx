'use client'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'
import { useUrlSearchParams } from '@/lib/hooks'

export default function Pagination() {
  const { setPage, getCurrentPage } = useUrlSearchParams()
  const totalPages = 5
  const initialPage = getCurrentPage(totalPages)

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
    <ResponsivePagination
      total={totalPages}
      current={initialPage}
      onPageChange={(page: number) => handlePageChange(page)}
    />
  )
}
