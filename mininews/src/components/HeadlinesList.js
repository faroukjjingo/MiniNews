import React from 'react';
import HeadlineCard from './HeadlineCard';
import { useNews } from '../contexts/NewsContext';
import LoadingSpinner from './LoadingSpinner';

const HeadlinesList = () => {
  const { headlines, loading } = useNews();

  if (loading) return <LoadingSpinner />;
  if (!headlines.length) return <p>No headlines found. Try a different search.</p>;

  return (
    <div className="headlines-list">
      {headlines.map((headline) => (
        <HeadlineCard key={headline.url} headline={headline} />
      ))}
    </div>
  );
};

export default HeadlinesList;