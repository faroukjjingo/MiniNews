import { useNewsContext } from '../contexts/NewsContext';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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