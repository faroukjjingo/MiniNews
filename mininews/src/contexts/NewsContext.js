// src/contexts/NewsContext.js
import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <NewsContext.Provider
      value={{
        country,
        setCountry,
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};