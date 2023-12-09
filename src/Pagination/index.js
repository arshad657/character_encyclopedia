import React from 'react';
import './Pagination.css'; 

function Pagination({ onNext, onPrev, currentPage }) {
    
  return (
    <div className="pagination-container">
      {onPrev && (
        <button className="pagination-button" onClick={onPrev}>
          Previous
        </button>
      )}
        <h3 style={{paddingLeft: 10, paddingRight: 10}}>Page {currentPage}</h3>
      {onNext && (
        <button className="pagination-button" onClick={onNext}>
          Next
        </button>
      )}
    </div>
  );
}


export default Pagination;
