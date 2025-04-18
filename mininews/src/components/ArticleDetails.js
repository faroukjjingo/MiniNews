import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const ArticleDetails = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching article details (NewsAPI doesn't provide full content)
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const foundArticle = savedArticles.find((a) => a.url === decodeURIComponent(url));
    setArticle(foundArticle || { url: decodeURIComponent(url), title: 'Article', content: 'Full content not available via NewsAPI free tier.' });
    setLoading(false);
  }, [url]);

  if (loading) return <LoadingSpinner />;
  if (!article) return <p>Article not found.</p>;

  return (
    <Container>
      <h1>{article.title}</h1>
      {article.urlToImage && <Image src={article.urlToImage} alt={article.title} />}
      <p>{article.content || 'Full article content is not available in the free NewsAPI tier. Visit the source for more details.'}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </Container>
  );
};

export default ArticleDetails;