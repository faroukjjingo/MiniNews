import HeadlineCard from './HeadlineCard';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const Pagination = styled.div`
  margin: 24px 0;
  text-align: center;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: #6B7280;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #F9FAFB;
    border-color: #D1D5DB;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    background: #F9FAFB;
    color: #6B7280;
    border-color: #E5E7EB;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #6B7280;
  text-align: center;
  margin: 24px 0;
`;

const HeadlinesList = ({ articles, loading, error, page, setPage, totalResults }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorText>Error: {error}</ErrorText>;
  if (!articles || articles.length === 0) return <ErrorText>No articles found.</ErrorText>;

  const pageSize = 20;
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <>
      <Grid>
        {articles.map((article, index) => (
          <HeadlineCard key={`${article.url}-${index}`} article={article} />
        ))}
      </Grid>
      <Pagination>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
          Next
        </Button>
      </Pagination>
    </>
  );
};

export default HeadlinesList;