// LanguageSelector.js
import { useNewsContext } from '../contexts/NewsContext';
import { LANGUAGES } from '../utils/constants';

const LanguageSelector = () => {
  const { languages, setLanguages } = useNewsContext();

  return (
    <div className="my-4">
      <select 
        value={languages} 
        onChange={(e) => setLanguages(e.target.value)}
        className="w-full py-2 px-3 bg-transparent border border-gray-700 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-200"
      >
        <option value="">All Languages</option>
        {LANGUAGES.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;