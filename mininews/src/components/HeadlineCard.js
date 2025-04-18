import { Link } from 'react-router-dom';
import { useNewsContext } from '../contexts/NewsContext';
import styled from 'styled-components';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const Card = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  max-width: 300px;
  background: #FFFFFF;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 8px;
  color: #000000;

  a {
    color: #000000;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #3B82F6;
    }
  }
`;

const Description = styled.p`
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #6B7280;
  margin: 0 0 12px;
`;

const SaveButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: ${(props) => (props.isSaved ? '#3B82F6' : '#6B7280')};
  transition: color 0.2s ease;

  &:hover {
    color: #3B82F6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const HeadlineCard = ({ article }) => {
  const { savedArticles, saveArticle, removeArticle } = useNewsContext();
  const isSaved = savedArticles.some((a) => a.url === article.url);

  return (
    <Card>
      {article.urlToImage && <Image src={article.urlToImage} alt={article.title} />}
      <Title>
        <Link to={`/article/${encodeURIComponent(article.url)}`}>{article.title}</Link>
      </Title>
      <Description>{article.description}</Description>
      <SaveButton
        isSaved={isSaved}
        onClick={() => (isSaved ? removeArticle(article.url) : saveArticle(article))}
      >
        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      </SaveButton>
    </Card>
  );
};

export default HeadlineCard;