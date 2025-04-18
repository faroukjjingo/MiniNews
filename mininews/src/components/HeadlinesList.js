// HeadlinesList.js
import HeadlineCard from './HeadlineCard';
import LoadingSpinner from './LoadingSpinner';

const HeadlinesList = ({ articles, loading, error, page, setPage, totalResults }) => {
  console.log('HeadlinesList Props:', { articles, loading, error, page, totalResults });
  
  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-gray-300 text-center my-8">Error: {error}</p>;
  if (!articles || articles.length === 0) return <p className="text-gray-300 text-center my-8">No articles found.</p>;
  
  const pageSize = 20; // Matches API
  const totalPages = Math.ceil(totalResults / pageSize);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <HeadlineCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
      
      <div className="flex justify-center items-center mt-8 text-sm">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg mr-4 ${
            page === 1 
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Previous
        </button>
        
        <span className="text-gray-300 mx-2">
          Page {page} of {totalPages || 1}
        </span>
        
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
          className={`px-4 py-2 rounded-lg ml-4 ${
            page >= totalPages 
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeadlinesList;