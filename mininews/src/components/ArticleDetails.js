// ArticleDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const ArticleDetails = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching article details (NewsAPI doesn't provide full content)
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const foundArticle = savedArticles.find((a) => a.url === decodeURIComponent(url));
    setArticle(foundArticle || { 
      url: decodeURIComponent(url), 
      title: 'Article', 
      content: 'Full content not available via NewsAPI free tier.' 
    });
    setLoading(false);
  }, [url]);

  if (loading) return <LoadingSpinner />;
  if (!article) return <p className="text-gray-300">Article not found.</p>;

  return (
    <div className="max-w-2xl mx-auto my-8 px-4">
      <h1 className="text-2xl font-bold mb-4 text-white">{article.title}</h1>
      
      {article.urlToImage && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="w-full max-h-96 object-cover"
          />
        </div>
      )}
      
      <p className="text-gray-300 mb-6 font-light leading-relaxed">
        {article.content || 'Full article content is not available in the free NewsAPI tier. Visit the source for more details.'}
      </p>
      
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 border border-gray-600 rounded-md text-sm text-gray-200 hover:bg-gray-800 transition-colors"
      >
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetails;