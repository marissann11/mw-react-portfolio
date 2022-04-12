import React from 'react';
import { FaSun, FaCloudMoon } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about row">
      <div className="wrap">
        <div className="pic"></div>
      </div>
      <div className="about-text">
        <h1>Hello!</h1>
        <p>
          This will be where I write all the things. <br />
          This will be where is will be wI write all the things. <br />
          This w This will be whhere is will be ere I write all the things.{' '}
          <br />
          This will be where I write all the will be where I write all the
          things. <br /> <br />
          This will be where I write all the things. <br />
          This will be where is will be wI write all the things. <br />
          This will be whhere is will be ere I write all tis will be where I
          write all the things. <br />
          This will be whhere is will be ere I write all the things. <br />
          This will be where I write all the will be where I write all the
          things. <br />
        </p>
        <div className="toggle">
          <FaSun />
          <FaCloudMoon />
        </div>
      </div>
    </div>
  );
};

export default About;
