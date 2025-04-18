import HeadlineCard from './HeadlineCard';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Pagination = styled.div`
  margin: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const HeadlinesList = ({ articles, loading, error, page, setPage, totalResults }) => {
  console.log('HeadlinesList Props:', { articles, loading, error, page, totalResults });
  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;
  if (!articles || articles.length === 0) return <p>No articles found.</p>;

  const pageSize = 20; // Matches API
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <>
      <Grid>
        {articles.map((article, index) => (
          <HeadlineCard key={`${article.url}-${index}`} article={article} />
        ))}
      </Grid>
      <Pagination>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </Button>
      </Pagination>
    </>
  );
};

export default HeadlinesList;