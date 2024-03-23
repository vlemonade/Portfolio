import React, { useRef, useEffect } from 'react';
import { portfolioList } from '../Data';
import { FaCode } from "react-icons/fa";

const MyWorks = ({ theme }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const listItems = listRef.current.querySelectorAll('.portfolioList');
    listItems.forEach(item => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ul ref={listRef} className="portfolioListContainer">
      {portfolioList.map(({ name, icon, desc, language, path }, index) => {
        return (
          <li className={`portfolioList ${theme === 'dark' ? 'darkMode' : ''}`} key={index}>
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
    </ul>
  );
};

export default MyWorks;
