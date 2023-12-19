import React, { createContext, useState } from 'react';
import "../context/Theme.css";

const ThemeContext = createContext ({
     DarkMode: false,
     toggleTheme : () => {},
});
const ThemeProvider = ({ children }) => {
    const [ DarkMode , setDarkMode ] = useState (false);

    const toggleTheme = () => setDarkMode(!DarkMode);

    return(
        <ThemeContext.Provider value={{ DarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };
