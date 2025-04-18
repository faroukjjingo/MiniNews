import { useState, useEffect } from 'react';
import { useNewsContext } from '../contexts/NewsContext';
import { fetchSources } from '../services/newsApi';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px 24px 8px 12px;
  margin: 8px;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  background: #FFFFFF;
  color: #000000;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 20px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #6B7280;
  }

  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const SourceSelector = () => {
  const { sources, setSources } = useNewsContext();
  const [availableSources, setAvailableSources] = useState([]);

  useEffect(() => {
    const loadSources = async () => {
      try {
        const fetchedSources = await fetchSources({});
        setAvailableSources(fetchedSources);
      } catch (error) {
        console.error('SourceSelector Error:', error.message);
      }
    };
    loadSources();
  }, []);

  return (
    <Select value={sources} onChange={(e) => setSources(e.target.value)}>
      <option value="">All Sources</option>
      {availableSources.map((source) => (
        <option key={source.id} value={source.id}>
          {source.name}
        </option>
      ))}
    </Select>
  );
};

export default SourceSelector;