import { useState, useEffect } from 'react';
import { fetchTopHeadlines, searchNews } from '../services/newsApi';

export const useNewsApi = ({ country, category, query }) => {
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
          data = await searchNews({ query, page });
        } else {
          data = await fetchTopHeadlines({ country, category, page });
        }
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [country, category, query, page]);

  return { articles, loading, error, page, setPage, totalResults };
};