import React, { useState } from 'react';
import './styles/app.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';

const App = () => {
  const [pages] = useState([
    {
      name: 'About',
    },
    {
      name: 'Skills',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Contact',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <main className="main-content">
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />{' '}
      <Page currentPage={currentPage} />
      <Footer />{' '}
    </main>
  );
};

export default App;
