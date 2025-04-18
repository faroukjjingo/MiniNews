// src/components/SearchBar.js
import React from 'react';
import useNewsApi from '../hooks/useNewsApi';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useNewsApi();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search headlines..."
      className="search-bar"
    />
  );
};

export default SearchBar;