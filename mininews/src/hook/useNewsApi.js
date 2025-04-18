import { useEffect, useState } from 'react';
import axios from 'axios';

const useNewsApi = (country, category, searchQuery) => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        let url = `${process.env.REACT_APP_NEWS_API_URL}/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        
        if (category) url += `&category=${category}`;
        if (searchQuery) url = `${process.env.REACT_APP_NEWS_API_URL}/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

        const response = await axios.get(url);
        setHeadlines(response.data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country, category, searchQuery]);

  return { headlines, loading, error };
};

export default useNewsApi;