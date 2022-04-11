import React from 'react';

const Nav = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <header className="header">
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
          </li>
        ))}
      </ul>{' '}
    </header>
  );
};

export default Nav;
