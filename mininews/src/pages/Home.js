import { useNewsContext } from '../contexts/NewsContext';
import { useNewsApi } from '../hooks/useNewsApi';
import HeadlinesList from '../components/HeadlinesList';
import CountrySelector from '../components/CountrySelector';
import CategorySelector from '../components/CategorySelector';
import SourceSelector from '../components/SourceSelector';
import LanguageSelector from '../components/LanguageSelector';
import SortSelector from '../components/SortSelector';
import DateSelector from '../components/DateSelector';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Home = () => {
  const { country, category, query, sources, languages, sort, date } = useNewsContext();
  const { articles, loading, error } = useNewsApi({
    country,
    category,
    query,
    sources,
    languages,
    sort,
    date,
  });

  return (
    <Container>
      <Filters>
        <CountrySelector />
        <CategorySelector />
        <SourceSelector />
        <LanguageSelector />
        <SortSelector />
        <DateSelector />
      </Filters>
      <HeadlinesList articles={articles} loading={loading} error={error} />
    </Container>
  );
};

export default Home;