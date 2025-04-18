// src/hooks/useNewsApi.js
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NewsContext } from '../contexts/NewsContext';

const useNewsApi = () => {
  const { country, category, searchQuery } = useContext(NewsContext);
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      if (!country) return;
      setLoading(true);
      setError(null);
      try {
        const params = {
          country,
          apiKey: process.env.REACT_APP_NEWSAPI_KEY,
          ...(category && { category }),
          ...(searchQuery && { q: searchQuery }),
        };
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          { params }
        );
        setHeadlines(response.data.articles);
      } catch (err) {
        setError('Failed to fetch headlines.');
      }
      setLoading(false);
    };
    fetchHeadlines();
  }, [country, category, searchQuery]);

  return { headlines, loading, error };
};

export default useNewsApi;