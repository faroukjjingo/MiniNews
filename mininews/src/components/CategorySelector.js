// src/components/CategorySelector.js
import React from 'react';
import useNewsApi from '../hooks/useNewsApi';

const categories = [
  { value: 'business', label: 'Business' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'general', label: 'General' },
  { value: 'health', label: 'Health' },
  { value: 'science', label: 'Science' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
];

const CategorySelector = () => {
  const { category, setCategory } = useNewsApi();

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-selector"
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c.value} value={c.value}>
          {c.label}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;