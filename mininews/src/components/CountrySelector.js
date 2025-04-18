// CountrySelector.js
import { useNewsContext } from '../contexts/NewsContext';
import { COUNTRIES } from '../utils/constants';

const CountrySelector = () => {
  const { country, setCountry } = useNewsContext();

  return (
    <div className="my-4">
      <select 
        value={country} 
        onChange={(e) => setCountry(e.target.value)}
        className="w-full py-2 px-3 bg-transparent border border-gray-700 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-200"
      >
        {COUNTRIES.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;