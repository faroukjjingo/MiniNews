import HeadlineCard from './HeadlineCard';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const HeadlinesList = ({ articles, loading, error }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;
  if (!articles.length) return <p>No articles found.</p>;

  return (
    <Grid>
      {articles.map((article, index) => (
        <HeadlineCard key={`${article.url}-${index}`} article={article} />
      ))}
    </Grid>
  );
};

export default HeadlinesList;