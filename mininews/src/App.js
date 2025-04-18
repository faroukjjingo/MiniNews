// src/App.js
import React from 'react';
import { NewsProvider } from './contexts/NewsContext';
import useNewsApi from './hooks/useNewsApi';
import Navbar from './components/Navbar';
import CountrySelector from './components/CountrySelector';
import CategorySelector from './components/CategorySelector';
import SearchBar from './components/SearchBar';
import HeadlinesList from './components/HeadlinesList';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App = () => {
  const { headlines = [], loading = false, error = null } = useNewsApi();

  return (
    <NewsProvider>
      <div className="app">
        <Navbar />
        <div className="controls">
          <CountrySelector />
          <CategorySelector />
          <SearchBar />
        </div>
        {loading && <LoadingSpinner />}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <HeadlinesList headlines={headlines} />}
      </div>
    </NewsProvider>
  );
};

export default App;