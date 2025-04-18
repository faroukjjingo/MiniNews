// src/contexts/NewsContext.js
import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const NewsContext = createContext();

// 2. Create provider component
export const NewsProvider = ({ children }) => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // 3. Value that will be available to consuming components
  const value = {
    country,
    setCountry,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    darkMode,
    toggleDarkMode,
    loading,
    setLoading,
    error,
    setError
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

// 4. Create and export the useNews hook
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};