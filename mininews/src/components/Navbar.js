import React from 'react';
import { FiGlobe, FiSun, FiMoon } from 'react-icons/fi';
import { useNews } from '../contexts/NewsContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useNews();

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-brand">
        <FiGlobe className="logo" />
        <h1>NewsFlash</h1>
      </div>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
};

export default Navbar;