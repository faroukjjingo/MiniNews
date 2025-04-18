// SourceSelector.js
import { useState, useEffect } from 'react';
import { useNewsContext } from '../contexts/NewsContext';
import { fetchSources } from '../services/newsApi';

const SourceSelector = () => {
  const { sources, setSources } = useNewsContext();
  const [availableSources, setAvailableSources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadSources = async () => {
      setIsLoading(true);
      try {
        const fetchedSources = await fetchSources({});
        setAvailableSources(fetchedSources);
      } catch (error) {
        console.error('SourceSelector Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSources();
  }, []);
  
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-400 mb-1">
        News Source
      </label>
      
      <select 
        value={sources} 
        onChange={(e) => setSources(e.target.value)}
        disabled={isLoading}
        className={`w-full py-2 px-3 bg-transparent border border-gray-700 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gray-600 ${
          isLoading ? 'text-gray-500 cursor-wait' : 'text-gray-200'
        }`}
      >
        <option value="">All Sources</option>
        {availableSources.map((source) => (
          <option key={source.id} value={source.id}>
            {source.name}
          </option>
        ))}
      </select>
      
      {isLoading && (
        <div className="text-xs text-gray-500 mt-1">Loading sources...</div>
      )}
    </div>
  );
};

export default SourceSelector;