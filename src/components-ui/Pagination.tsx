import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <nav className="flex items-center justify-center space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="py-2 px-4 bg-primary-500 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`py-2 px-4 rounded ${index + 1 === currentPage ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="py-2 px-4 bg-primary-500 text-white rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
