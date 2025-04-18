// src/contexts/NewsContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// 1. Create Context
const NewsContext = createContext();

// 2. Create Provider Component
export const NewsProvider = ({ children }) => {
  // State management
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Memoized context value
  const contextValue = useMemo(() => ({
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
  }), [country, category, searchQuery, darkMode, loading, error]);

  return (
    <NewsContext.Provider value={contextValue}>
      {children}
    </NewsContext.Provider>
  );
};

// 3. Create custom hook
export const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

// PropTypes validation
NewsProvider.propTypes = {
  children: PropTypes.node.isRequired
};