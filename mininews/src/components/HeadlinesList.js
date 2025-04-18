// src/components/HeadlinesList.js
import React from 'react';
import { useNews } from '../contexts/NewsContext';
import HeadlineCard from './HeadlineCard';
import LoadingSpinner from './LoadingSpinner';

const HeadlinesList = () => {
  const { headlines, loading, error } = useNews();

  if (loading) return <LoadingSpinner />;
  
  if (error) return (
    <div className="error-message">
      <p>Failed to load headlines. Please try again later.</p>
      <small>{error.message}</small>
    </div>
  );

  if (!headlines || headlines.length === 0) {
    return (
      <div className="no-results">
        <p>No headlines found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="headlines-list">
      {headlines.map((headline) => (
        <HeadlineCard 
          key={headline.url || headline.title} 
          headline={headline} 
        />
      ))}
    </div>
  );
};

export default HeadlinesList;