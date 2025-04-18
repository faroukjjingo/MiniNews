// CategorySelector.js
import { useNewsContext } from '../contexts/NewsContext';
import { CATEGORIES } from '../utils/constants';

const CategorySelector = () => {
  const { category, setCategory } = useNewsContext();

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(category === cat ? '' : cat)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            category === cat 
              ? 'bg-gray-700 text-white' 
              : 'bg-gray-900 text-gray-400 border border-gray-800 hover:bg-gray-800'
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;