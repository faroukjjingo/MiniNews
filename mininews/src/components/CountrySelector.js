import { useNewsContext } from '../contexts/NewsContext';
import { COUNTRIES } from '../utils/constants';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 4px;
`;

const CountrySelector = () => {
  const { country, setCountry } = useNewsContext();

  return (
    <Select value={country} onChange={(e) => setCountry(e.target.value)}>
      {COUNTRIES.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </Select>
  );
};

export default CountrySelector;