// src/components/HeadlineCard.js
import React from 'react';

const HeadlineCard = ({ article }) => {
  return (
    <div className="headline-card">
      <h3>{article.title}</h3>
      <p>Source: {article.source.name}</p>
      <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
      {article.url && (
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      )}
    </div>
  );
};

export default HeadlineCard;