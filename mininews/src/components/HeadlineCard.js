import { Link } from 'react-router-dom';
import { useNewsContext } from '../contexts/NewsContext';
import styled from 'styled-components';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  max-width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
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
      <p>{article.description}</p>
      <button
        onClick={() => (isSaved ? removeArticle(article.url) : saveArticle(article))}
      >
        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </Card>
  );
};

export default HeadlineCard;