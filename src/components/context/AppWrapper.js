import React, { useContext , useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import "../context/Theme.css"

const AppWrapper = ({ children }) => {
    const { DarkMode, setDarkMode } = useContext(ThemeContext);
  
    useEffect(() => {
      document.body.className = DarkMode ? 'dark-theme' : 'light-theme';
    }, [DarkMode]);
  
    return (
      <>
        {children}
      </>
    );
  };
  
  export default AppWrapper;
