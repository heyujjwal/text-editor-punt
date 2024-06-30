import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'
import './DarkModeToggle.css';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkModeToggle" className="toggle-label">
      
      <FaSun className="icon sun-icon" />
        <FaMoon className="icon moon-icon" /> </label>
      
    </div>
  );
};

export default DarkModeToggle;
