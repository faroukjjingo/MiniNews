// SavedArticles.js
import { useNewsContext } from '../contexts/NewsContext';
import HeadlineCard from './HeadlineCard';

const SavedArticles = () => {
  const { savedArticles } = useNewsContext();
  
  if (!savedArticles.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-gray-400 text-lg">No saved articles</p>
        <p className="text-gray-500 text-sm mt-2">Bookmark articles to see them here</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-medium text-white mb-6">Saved Articles</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {savedArticles.map((article, index) => (
          <HeadlineCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SavedArticles;