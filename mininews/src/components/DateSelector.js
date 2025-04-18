import { useNewsContext } from '../contexts/NewsContext';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  margin: 10px;
  border-radius: 4px;
`;

const DateSelector = () => {
  const { date, setDate } = useNewsContext();

  return (
    <Input
      type="date"
      value={date.split(',')[0] || ''} // Show start date
      onChange={(e) => setDate(e.target.value)} // Simple single-date input
      disabled // Disabled for free plan
    />
  );
};

export default DateSelector;