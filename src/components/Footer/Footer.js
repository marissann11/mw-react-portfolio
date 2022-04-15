import React from 'react';
import './footer.scss';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <FaLinkedin className="single-icon" />

        <FaGithub className="single-icon" />

        <FaStackOverflow className="single-icon" />
      </div>
    </footer>
  );
};

export default Footer;
