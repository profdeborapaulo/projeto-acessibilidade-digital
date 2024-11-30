import React, { createContext, useState, useContext } from 'react';

// Definição dos temas
const themes = {
  default: {
    background: '#FFEDE3',
    text: '#49070A',
    button: '#49070A',
  },
  protanopia: {
    background: '#E3E8FF',
    text: '#071449',
    button: '#071449',
  },
  deuteranopia: {
    background: '#F5E6CC',
    text: '#604C12',
    button: '#604C12',
  },
  tritanopia: {
    background: '#D1F5FF',
    text: '#003B57',
    button: '#003B57',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('default');

  const switchTheme = (newTheme) => {
    setThemeName(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
