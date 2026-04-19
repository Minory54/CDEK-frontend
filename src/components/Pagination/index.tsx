import {IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import "./style.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IconArrowNarrowLeft size={21.5}/>
      </button>

      <button
        type="button"
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IconArrowNarrowRight size={21.5}/>
      </button>
    </div>
  );
};