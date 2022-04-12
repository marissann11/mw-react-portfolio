import React from 'react';
import About from './About';
import PageContent from './PageContent';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import '../styles/page.scss';

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
