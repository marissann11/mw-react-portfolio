import React from 'react';
import './footer.scss';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/marissa-wilhite-8700a4238/"
          target="_blank"
        >
          <FaLinkedin className="single-icon" />
        </a>
        <a href="https://github.com/marissann11" target="_blank">
          <FaGithub className="single-icon" />
        </a>
        <a
          href="https://stackoverflow.com/users/17353462/marissa"
          target="_blank"
        >
          <FaStackOverflow className="single-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
