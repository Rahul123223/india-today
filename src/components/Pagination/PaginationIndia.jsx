import React from "react";
import { Link } from "react-router-dom";

export const PaginationIndia = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return <nav>
    <ul className="pagination">
      {pageNumbers.map(number =>(
        <li key={number} className="page-item">
          <Link className="page-link">{number}</Link>
        </li>
      ))}
    </ul>
  </nav>;
};
