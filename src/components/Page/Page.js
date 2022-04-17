import React from 'react';
import About from '../About/About';
import PageContent from './PageContent';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './page.scss';

// switch case for conditionally rendering components based on what option the user chooses from the nav bar

const Page = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Skills />;
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
