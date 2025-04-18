import { useState, useEffect } from 'react';
import { fetchTopHeadlines, searchNews } from '../services/newsApi';

export const useNewsApi = ({ country, category, query, sources, languages, sort, date }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let data;
        if (query) {
          data = await searchNews({ query, sources, languages, sort, date, page });
        } else {
          data = await fetchTopHeadlines({ country, category, sources, languages, sort, date, page });
        }
        console.log('Fetched Articles:', data.articles);
        setArticles(data.articles || []);
        setTotalResults(data.totalResults || 0);
        setError(null);
      } catch (err) {
        console.error('useNewsApi Error:', err.message);
        setError(err.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [country, category, query, sources, languages, sort, date, page]);

  return { articles, loading, error, page, setPage, totalResults };
};