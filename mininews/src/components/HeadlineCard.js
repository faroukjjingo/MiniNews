// HeadlineCard.js
import { Link } from 'react-router-dom';
import { useNewsContext } from '../contexts/NewsContext';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const HeadlineCard = ({ article }) => {
  const { savedArticles, saveArticle, removeArticle } = useNewsContext();
  const isSaved = savedArticles.some((a) => a.url === article.url);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      {article.urlToImage && (
        <div className="h-40 overflow-hidden">
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 text-white leading-tight">
          <Link 
            to={`/article/${encodeURIComponent(article.url)}`}
            className="hover:text-gray-300 transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.description}</p>
        
        <button
          onClick={() => (isSaved ? removeArticle(article.url) : saveArticle(article))}
          className="text-gray-400 hover:text-gray-200 p-1 rounded-full transition-colors focus:outline-none"
          aria-label={isSaved ? "Remove from bookmarks" : "Add to bookmarks"}
        >
          {isSaved ? <FaBookmark className="text-white" /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default HeadlineCard;