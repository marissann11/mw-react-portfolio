import React from 'react';
import './header.scss';
import { FaSun, FaCloudMoon } from 'react-icons/fa';

const Nav = (props) => {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header className="header">
      <ul>
        {pages.map((page) => (
          <li key={page.name} className={page === currentPage ? `active` : ``}>
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
          </li>
        ))}
        <li className="toggle">
          <FaSun />
          <FaCloudMoon />
        </li>
      </ul>{' '}
    </header>
  );
};

export default Nav;