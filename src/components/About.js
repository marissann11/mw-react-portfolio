import React from 'react';
import pic from '../assets/images/pic.png';
import { FaAngleDoubleDown } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img src={pic} alt={`me`}></img>
      </div>
      <div className="about-text">
        <h1>Hello!</h1>
        <p>Things about me I guess</p>
        <FaAngleDoubleDown />
      </div>
    </div>
  );
};

export default About;
