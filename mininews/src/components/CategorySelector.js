import { useNewsContext } from '../contexts/NewsContext';
import { CATEGORIES } from '../utils/constants';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  margin: 5px;
  background: ${(props) => (props.active ? '#3498db' : '#f1f1f1')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
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