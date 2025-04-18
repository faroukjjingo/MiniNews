// src/components/HeadlineCard.js
import React from 'react';

const HeadlineCard = ({ article }) => {
  return (
    <div className="headline-card">
      <h3>{article.title}</h3>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="source-link">
        {article.source.name}
      </a>
    </div>
  );
};

export default HeadlineCard;