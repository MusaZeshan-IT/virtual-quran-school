import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex justify-center mt-24">
            <div className="flex items-center gap-x-4 px-4 py-2 bg-white shadow-lg rounded-full">
                {/* Previous Button */}
                <button
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous Page"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {/* Page Numbers */}
                <div className={`grid grid-cols-${totalPages} gap-x-5`}>
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                className={`flex items-center hover:border-b-[2px] hover:border-b-emerald-600 text-xl justify-center transition-all duration-500 ease-in-out ${pageNumber === currentPage
                                    ? 'text-gray-600 border-b-[2px] border-b-emerald-600'
                                    : 'text-gray-600 pb-[2px]'
                                    }`}
                                onClick={() => handlePageClick(pageNumber)}
                                aria-label={`Page ${pageNumber}`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>

                {/* Next Button */}
                <button
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
