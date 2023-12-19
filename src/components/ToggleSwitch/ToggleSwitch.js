import React, { useContext, useState } from 'react';
import './toggleSwitch.css';
import { ThemeContext } from '../context/ThemeContext';
import "../context/Theme.css"


const ToggleSwitch = () => {
  const { DarkMode , toggleTheme } = useContext(ThemeContext);
  const [internalChecked, setInternalChecked] = useState(DarkMode);

  const handleChange = (event) => {
    setInternalChecked(event.target.checked);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={internalChecked} onChange={handleChange}  />
       
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
