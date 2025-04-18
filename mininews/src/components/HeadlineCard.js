import React from 'react';
import { format } from 'date-fns';

const HeadlineCard = ({ headline }) => {
  return (
    <article className="headline-card">
      {headline.urlToImage && (
        <img src={headline.urlToImage} alt={headline.title} />
      )}
      <div className="headline-content">
        <h3>{headline.title}</h3>
        <p>{headline.description}</p>
        <div className="headline-meta">
          <span>{headline.source?.name}</span>
          <span>
            {format(new Date(headline.publishedAt), 'MMM d, yyyy h:mm a')}
          </span>
        </div>
        <a href={headline.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </article>
  );
};

export default HeadlineCard;