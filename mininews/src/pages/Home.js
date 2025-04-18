import { useNewsContext } from '../contexts/NewsContext';
import { useNewsApi } from '../hooks/useNewsApi';
import HeadlinesList from '../components/HeadlinesList';
import CountrySelector from '../components/CountrySelector';
import CategorySelector from '../components/CategorySelector';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  const { country, category, query } = useNewsContext();
  const { articles, loading, error } = useNewsApi({ country, category, query });

  return (
    <Container>
      <CountrySelector />
      <CategorySelector />
      <HeadlinesList articles={articles} loading={loading} error={error} />
    </Container>
  );
};

export default Home;