import React from 'react';
import './about.scss';
import me from '../../assets/images/me.png';

const About = () => {
  return (
    <div className="about">
      <div className="img-container">
        <img src={me} alt=""></img>
        <div className="box"></div>
        <div className="box2"></div>
      </div>
      <div className="about-text">
        <h1>Hi, I'm Marissa</h1>
        <p>
          This is where I write something <br />
          And this is where I'll write another something.
        </p>
        <h2>Let's work together!</h2>
      </div>
    </div>
  );
};

export default About;
