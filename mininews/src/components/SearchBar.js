// SearchBar.js
import { useState } from 'react';
import { useNewsContext } from '../contexts/NewsContext';

const SearchBar = () => {
  const { setQuery } = useNewsContext();
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setQuery(e.target.value);
  };
  
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search news..."
        value={searchValue}
        onChange={handleSearch}
        className="w-full py-2 px-4 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 text-sm"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;