type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            onClick={() => onPageChange(i + 1)}
            disabled={currentPage === i + 1}
            className={`mx-1 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${currentPage === i + 1 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
export default Pagination;