import React from 'react';
import './Portfolio.css';
import Port from '../../Components/myworks';

const Portfolio = ({ theme }) => {
  return (
    <div className="portfolio">
      <div className="header">My <span>Portfolio</span></div>
      <div className="workItem">
        <Port theme={theme}/>
      </div>
    </div>
  );
}

export default Portfolio;
