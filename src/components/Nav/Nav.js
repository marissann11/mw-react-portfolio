import React from 'react';
import './header.scss';
// import useDarkMode, { DarkModeToggler } from 'use-dark-mode-hook';

const Nav = (props) => {
  const { pages = [], setCurrentPage, currentPage } = props;

  // Leaving useDarkMode hook commented out until I'm happy with color scheme for dark mode preference
  // const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className="header">
      <ul>
        {pages.map((page) => (
          <li key={page.name} className={page === currentPage ? `active` : ``}>
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
          </li>
        ))}
        <li>
          {/* <DarkModeToggler
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            buttonClassName="toggle"
          />{' '} */}
        </li>
      </ul>{' '}
    </header>
  );
};

export default Nav;
