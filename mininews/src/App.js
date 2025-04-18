// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import CountrySelector from './components/CountrySelector';
import CategorySelector from './components/CategorySelector';
import SearchBar from './components/SearchBar';
import HeadlinesList from './components/HeadlinesList';
import LoadingSpinner from './components/LoadingSpinner';
import useNewsApi from './hooks/useNewsApi';
import './App.css';

const App = () => {
  const { headlines = [], loading = false, error = null } = useNewsApi();

  return (
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
  );
};

export default App;