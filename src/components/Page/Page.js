import React from 'react';
import About from '../About/About';
import PageContent from './PageContent';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './page.scss';

const Page = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        <About />;
    }
  };

  return (
    <div className="page">
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
};

export default Page;
