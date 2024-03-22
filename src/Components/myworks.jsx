import React from 'react';
import { portfolioList } from '../Data';
import { FaCode } from "react-icons/fa";


const MyWorks = ({ theme }) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {portfolioList.map(({ name, icon, desc, language, path }, index) => {
        return (
          <li className="portfolioList" key={index}>
            <div className="picHolder">
              <img className='pics' src={icon} alt="" />
            </div>
            <p className='name'>{name}</p>
            <p className="desc">{desc}</p>
            <div className={`code ${theme === 'dark' ? 'darkMode' : ''}`}>
              <span className={`codeIcon ${theme === 'dark' ? 'darkModeIcon' : ''}`}>
                <FaCode />
              </span>
              {language}
            </div>
            <button onClick={() => openInNewTab(path)} className={`viewButton ${theme === 'dark' ? 'darkModeButton' : ''}`}>
              View Code
            </button>
          </li>
        );
      })}
    </>
  );
};

export default MyWorks;
