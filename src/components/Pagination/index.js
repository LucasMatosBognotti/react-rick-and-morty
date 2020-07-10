import React from 'react';

import { Pages } from './styles';

export default function Pagination({ paginate }) {
  const pageNumbers = [];

  for (let i = 1; i < 21; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pages>
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href='!#'>
            {number}
          </a>
        </li>
      ))}
    </Pages>
  );
};