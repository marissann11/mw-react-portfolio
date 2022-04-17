import React from 'react';
import './skills.scss';
import { FaReact, FaNodeJs, FaCodeBranch } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="top">
          <FaReact />
        </div>
        <h2>Frontend Technologies</h2>
        <p>
          JavaScript <br />
          React.js <br />
          jQuery <br />
          HTML5 <br />
          CSS <br />
          Bootstrap <br />
        </p>
      </div>
      <div className="container">
        <div className="top">
          <FaNodeJs />
        </div>
        <h2>Backend Technologies</h2>
        <p>
          Node.js <br />
          Express.js <br />
          MERN Stack <br />
          MySQL <br />
          User Auth <br />
          Session Storage
        </p>
      </div>
      <div className="container">
        <div className="top">
          <FaCodeBranch />
        </div>
        <h2>Deployment & Version Control</h2>
        <p>
          Heroku <br />
          Github <br />
          MongoDB Atlas
        </p>
      </div>
      <div className="container">
        <div className="top"></div>
        <h2>Resume</h2>
        <p>Click to download my Resume!</p>
      </div>
    </section>
  );
};

export default Skills;
