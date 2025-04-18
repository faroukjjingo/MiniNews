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
    const fetchHeadlines = async (retryCount = 0) => {
      if (!country) return;
      setLoading(true);
      setError(null);
      try {
        const params = {
          country,
          apiKey: process.env.REACT_APP_NEWSAPI_ORG_KEY,
          ...(category && { category }),
          ...(searchQuery && { q: searchQuery }),
          pageSize: 20,
        };
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          { params }
        );
        if (response.data.status === 'error') {
          throw new Error(response.data.message);
        }
        // Map only title, source, and URL; truncate title to 60 chars
        setHeadlines(
          (response.data.articles || []).map(article => ({
            title: article.title?.substring(0, 60) + (article.title?.length > 60 ? '...' : ''),
            source: { name: article.source?.name || 'Unknown' },
            url: article.url || '#',
          }))
        );
      } catch (err) {
        if (err.response?.status === 426 && retryCount < 2) {
          setTimeout(() => fetchHeadlines(retryCount + 1), 1000);
        } else {
          setError(err.message || 'Failed to fetch headlines. Verify your API key.');
          // Fallback: Mock data
          setHeadlines([
            {
              title: 'Sample Headline',
              source: { name: 'Sample Source' },
              url: '#',
            },
          ]);
        }
      }
      setLoading(false);
    };
    fetchHeadlines();
  }, [country, category, searchQuery]);

  return { headlines, loading, error, country, setCountry, category, setCategory, searchQuery, setSearchQuery };
};

export default useNewsApi;