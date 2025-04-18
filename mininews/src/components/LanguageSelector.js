import { useNewsContext } from '../contexts/NewsContext';
import { LANGUAGES } from '../utils/constants';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 4px;
`;

const LanguageSelector = () => {
  const { languages, setLanguages } = useNewsContext();

  return (
    <Select value={languages} onChange={(e) => setLanguages(e.target.value)}>
      <option value="">All Languages</option>
      {LANGUAGES.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </Select>
  );
};

export default LanguageSelector;