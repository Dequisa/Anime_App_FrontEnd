import React from "react";
import "../CSS/Pagination.css";

const Pagination = ({ animesPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / animesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              //   href="animes"
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
