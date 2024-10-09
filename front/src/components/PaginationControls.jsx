import React from 'react';

const PaginationControls = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
  return (
    <div className='paginationControls'>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
      prev
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
       next 
      </button>
    </div>
  );
};

export default PaginationControls;