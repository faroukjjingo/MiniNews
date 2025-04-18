import { useNewsContext } from '../contexts/NewsContext';
import HeadlineCard from './HeadlineCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const EmptyText = styled.p`
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #6B7280;
  text-align: center;
  margin: 24px 0;
`;

const SavedArticles = () => {
  const { savedArticles } = useNewsContext();
  if (!savedArticles.length) return <EmptyText>No saved articles.</EmptyText>;

  return (
    <Grid>
      {savedArticles.map((article, index) => (
        <HeadlineCard key={`${article.url}-${index}`} article={article} />
      ))}
    </Grid>
  );
};

export default SavedArticles;