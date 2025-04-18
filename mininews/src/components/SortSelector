import { useNewsContext } from '../contexts/NewsContext';
import { SORT_OPTIONS } from '../utils/constants';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 4px;
`;

const SortSelector = () => {
  const { sort, setSort } = useNewsContext();

  return (
    <Select value={sort} onChange={(e) => setSort(e.target.value)}>
      {SORT_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default SortSelector;