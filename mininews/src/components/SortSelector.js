// SortSelector.js
import { useNewsContext } from '../contexts/NewsContext';
import { SORT_OPTIONS } from '../utils/constants';

const SortSelector = () => {
  const { sort, setSort } = useNewsContext();

  return (
    <div className="my-4">
      <select 
        value={sort} 
        onChange={(e) => setSort(e.target.value)}
        className="w-full py-2 px-3 bg-transparent border border-gray-700 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gray-600 text-gray-200"
      >
        {SORT_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelector;