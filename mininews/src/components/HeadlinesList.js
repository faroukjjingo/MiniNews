// src/components/HeadlinesList.js
import React from 'react';
import HeadlineCard from './HeadlineCard';

const HeadlinesList = ({ headlines }) => {
  return (
    <div className="headlines-list">
      {headlines.length === 0 ? (
        <p>No headlines available.</p>
      ) : (
        headlines.map((article, index) => (
          <HeadlineCard key={index} article={article} />
        ))
      )}
    </div>
  );
};

export default HeadlinesList;