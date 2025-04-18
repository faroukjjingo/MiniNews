import React from 'react';
import { useNews } from '../contexts/NewsContext';

const categories = [
  'business', 'entertainment', 'general', 
  'health', 'science', 'sports', 'technology'
];

const CategorySelector = () => {
  const { category, setCategory } = useNews();

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-selector"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;