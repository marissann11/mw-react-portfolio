import React, { useState } from 'react';
import './styles/app.scss';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Page from './components/Page/Page';

const App = () => {
  const [pages] = useState([
    {
      name: 'About',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Resume',
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
