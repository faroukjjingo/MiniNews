// src/components/CategorySelector.js
import React from 'react';
import useNewsApi from '../hooks/useNewsApi';

const categories = [
  { value: 'Business', label: 'Business' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Health', label: 'Health' },
  { value: 'Science/Tech', label: 'Science/Tech' },
  { value: 'Sports', label: 'Sports' },
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