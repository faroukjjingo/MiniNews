import React from 'react';
import { useNews } from '../contexts/NewsContext';

const CountrySelector = () => {
  const { country, setCountry } = useNews();

  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'in', name: 'India' },
  ];

  return (
    <select 
      value={country} 
      onChange={(e) => setCountry(e.target.value)}
      className="country-selector"
    >
      {countries.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;