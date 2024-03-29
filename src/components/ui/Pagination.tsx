"use client";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useUrlSearchParams } from "@/lib/hooks";

type PaginationProps = {
  totalItems: number;
};

export default function Pagination({ totalItems }: PaginationProps) {
  const { setPage, getCurrentPage } = useUrlSearchParams();
  const perPage = 20;
  const totalPages = Math.round(totalItems / perPage);
  if (totalItems < perPage) return null;
  const initialPage = getCurrentPage(totalPages);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <ResponsivePagination
      total={totalPages}
      current={initialPage}
      onPageChange={(page: number) => handlePageChange(page)}
    />
  );
}
