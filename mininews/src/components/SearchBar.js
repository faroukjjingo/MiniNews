import React, { useState } from 'react';
import { useNews } from '../contexts/NewsContext';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const { setSearchQuery } = useNews();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search headlines..."
      />
      <button type="submit">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;