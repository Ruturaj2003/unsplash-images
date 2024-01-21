import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
// acc key =RlNk9iUoNEMbSc8-EnQy6X4C2A2PPvJ8AZWF4CUZhhY
// sec key =sBMcBCpxWytsdxxGLGpBCUZcxss3ZpC2smZPhHOIMOg
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('car');
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
    const btn = document.querySelector('.btn');
    btn.classList.toggle('darkbtn');
    const imgCont = document.getElementById('dotacont');
    imgCont.classList.toggle('darkcont');
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
