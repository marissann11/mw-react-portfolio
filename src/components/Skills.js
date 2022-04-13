import React from 'react';
import '../styles/skills.scss';
import { FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="top">
          <FaJsSquare />
        </div>
        <h2>Title</h2>
        <p>This is there I would write things about this thing I can do</p>
      </div>
      <div className="container">
        <div className="top">
          <FaNodeJs />
        </div>
        <h2>Title</h2>
        <p>This is there I would write things about this thing I can do</p>
      </div>
      <div className="container">
        <div className="top">
          <FaReact />
        </div>
        <h2>Title</h2>
        <p>This is there I would write things about this thing I can do</p>
      </div>
    </section>
  );
};

export default Skills;
