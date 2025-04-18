import { useNewsContext } from '../contexts/NewsContext';
import { CATEGORIES } from '../utils/constants';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  margin: 4px;
  background: ${(props) => (props.active ? '#000000' : '#FFFFFF')};
  color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  border: 1px solid ${(props) => (props.active ? '#000000' : '#E5E7EB')};
  border-radius: 4px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.active ? '#1F2937' : '#F9FAFB')};
    border-color: ${(props) => (props.active ? '#1F2937' : '#D1D5DB')};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const CategorySelector = () => {
  const { category, setCategory } = useNewsContext();

  return (
    <div>
      {CATEGORIES.map((cat) => (
        <Button
          key={cat}
          active={category === cat}
          onClick={() => setCategory(category === cat ? '' : cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelector;