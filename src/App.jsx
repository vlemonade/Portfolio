import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio theme={theme} />} /> 
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
