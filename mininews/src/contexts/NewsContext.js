import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <NewsContext.Provider
      value={{
        country,
        setCountry,
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
        darkMode,
        toggleDarkMode
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};