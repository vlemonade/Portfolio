import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { navlinks } from '../../Data';
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <div className={`lineb ${theme === 'dark' ? 'darkMode' : ''}`}></div>
      <nav className='nav'>
        <div className={`${showMenu ? 'navMenu showMenu' : 'navMenu'}`}>
          <ul className="navList">
            {navlinks.map(({ name, icon, path }, index) => {
              return (
                <li className="navItem" key={index}>
                  <NavLink to={path} className='navLink' onClick={handleClick}>
                    {icon}
                    <h3 className="navName">{name}</h3>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className={`${showMenu ? 'navToggle animatedToggle' : 'navToggle'}`} onClick={() => setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div onClick={toggleMode} className="themeSet">
        <span className='themeIcon'>{theme === 'light' ? <FaCloudSun /> : <FaCloudMoon />}</span>
      </div>
    </>
  );
}

export default Navbar;
