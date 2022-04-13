import React from 'react';
import '../styles/portfolio.scss';

const Portfolio = () => {
  const currentProjects = [
    {
      name: 'Sole Intentions',
      github: 'https://github.com/marissann11/sole-intentions-TMT',
      site: 'https://soleintentions.herokuapp.com/',
    },
    {
      name: 'Cosmo Quotes',
      github: 'https://github.com/Rebekah818/andromeda',
      site: 'https://rebekah818.github.io/andromeda/',
    },
    {
      name: 'Weather Dashboard',
      github: 'https://github.com/marissann11/weather-dashboard-week6',
      site: 'https://marissann11.github.io/weather-dashboard-week6/',
    },
    {
      name: 'Password Generator',
      github: 'https://github.com/marissann11/password-generator',
      site: 'https://marissann11.github.io/password-generator/',
    },
    {
      name: 'Code Quiz',
      github: 'https://github.com/marissann11/code-quiz-week4-challenge',
      site: 'https://marissann11.github.io/code-quiz-week4-challenge/',
    },
    {
      name: 'Work Day Scheduler',
      github: 'https://github.com/marissann11/work-day-scheduler-week5',
      site: 'https://marissann11.github.io/work-day-scheduler-week5/',
    },
  ];

  return (
    <div className="portfolio">
      <div className="container">
        {currentProjects.map((project, i) => (
          <div className="project">
            <img
              src={require(`../assets/small/${i}.png`)}
              alt={project.name}
              className="clip"
            />
            <div className="links">
              <a href={project.github}>View Repo</a>
              <a href={project.site}>Visit Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
