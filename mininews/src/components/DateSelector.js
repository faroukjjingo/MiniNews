import { useNewsContext } from '../contexts/NewsContext';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 12px;
  margin: 8px;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  background: #FFFFFF;
  color: #000000;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 20px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #6B7280;
  }

  &:focus:not(:disabled) {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    background: #F9FAFB;
    color: #6B7280;
    cursor: not-allowed;
  }
`;

const DateSelector = () => {
  const { date, setDate } = useNewsContext();

  return (
    <Input
      type="date"
      value={date.split(',')[0] || ''}
      onChange={(e) => setDate(e.target.value)}
      disabled
    />
  );
};

export default DateSelector;