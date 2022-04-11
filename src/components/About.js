import React from 'react';
import me from '../assets/images/me.png';

const About = () => {
  return (
    <div className="about">
      <img src={me} alt={`me`} className="my-img"></img>
      <div className="overlay"></div>
      <div className="greeting"></div>
    </div>
  );
};

export default About;
