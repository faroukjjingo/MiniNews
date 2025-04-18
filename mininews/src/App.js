import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountrySelector from './components/CountrySelector';
import CategorySelector from './components/CategorySelector';
import SearchBar from './components/SearchBar';
import HeadlinesList from './components/HeadlinesList';
import { NewsProvider } from './contexts/NewsContext';

function App() {
  return (
    <NewsProvider>
      <div className="App">
        <Navbar />
        <main>
          <div className="controls">
            <CountrySelector />
            <CategorySelector />
            <SearchBar />
          </div>
          <HeadlinesList />
        </main>
      </div>
    </NewsProvider>
  );
}

export default App;