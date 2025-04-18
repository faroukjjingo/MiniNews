import { useNewsContext } from '../contexts/NewsContext';
import HeadlineCard from './HeadlineCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const SavedArticles = () => {
  const { savedArticles } = useNewsContext();

  if (!savedArticles.length) return <p>No saved articles.</p>;

  return (
    <Grid>
      {savedArticles.map((article, index) => (
        <HeadlineCard key={`${article.url}-${index}`} article={article} />
      ))}
    </Grid>
  );
};

export default SavedArticles;