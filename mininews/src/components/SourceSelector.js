import { useState, useEffect } from 'react';
import { useNewsContext } from '../contexts/NewsContext';
import { fetchSources } from '../services/newsApi';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 4px;
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