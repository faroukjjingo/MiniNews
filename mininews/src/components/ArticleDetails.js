import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

const Container = styled.div`
  max-width: 800px;
  margin: 24px auto;
  padding: 0 16px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #000000;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #6B7280;
  margin-bottom: 16px;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #3B82F6;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #2563EB;
  }
`;

const ArticleDetails = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const foundArticle = savedArticles.find((a) => a.url === decodeURIComponent(url));
    setArticle(foundArticle || { url: decodeURIComponent(url), title: 'Article', content: 'Full content not available via NewsAPI free tier.' });
    setLoading(false);
  }, [url]);

  if (loading) return <LoadingSpinner />;
  if (!article) return <Content>Article not found.</Content>;

  return (
    <Container>
      <Title>{article.title}</Title>
      {article.urlToImage && <Image src={article.urlToImage} alt={article.title} />}
      <Content>{article.content || 'Full article content is not available in the free NewsAPI tier. Visit the source for more details.'}</Content>
      <Link href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </Link>
    </Container>
  );
};

export default ArticleDetails;