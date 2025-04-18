import { useNewsContext } from '../contexts/NewsContext';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 12px;
  width: 100%;
  max-width: 300px;
  margin: 8px;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  background: #FFFFFF;
  color: #000000;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 20px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #6B7280;
  }

  &:hover {
    border-color: #6B7280;
  }

  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const SearchBar = () => {
  const { setQuery } = useNewsContext();
  return (
    <Input
      type="text"
      placeholder="Search news..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;