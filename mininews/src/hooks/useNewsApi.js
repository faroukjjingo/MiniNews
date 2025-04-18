// src/hooks/useNewsApi.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useNewsApi = () => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
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
        if (response.data.status === 'error') {
          throw new Error(response.data.message);
        }
        setHeadlines(response.data.articles || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch headlines.');
      }
      setLoading(false);
    };
    fetchHeadlines();
  }, [country, category, searchQuery]);

  return { headlines, loading, error, country, setCountry, category, setCategory, searchQuery, setSearchQuery };
};

export default useNewsApi;