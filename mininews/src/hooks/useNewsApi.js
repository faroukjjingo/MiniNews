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
      setLoading(true);
      setError(null);
      try {
        const params = {
          apiKey: process.env.REACT_APP_NEWSAPI_AI_KEY,
          lang: 'eng', // Default to English
          ...(country && { sourceLocationUri: `http://en.wikipedia.org/wiki/${country.toUpperCase()}` }),
          ...(category && { categoryUri: `dmoz/${category}` }),
          ...(searchQuery && { keywords: searchQuery }),
          maxItems: 20,
        };
        const response = await axios.get(
          'http://eventregistry.org/api/v1/article/getArticles',
          { params }
        );
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        const articles = response.data.articles?.results || [];
        setHeadlines(articles.map(article => ({
          title: article.title,
          source: { name: article.source?.title || 'Unknown' },
          publishedAt: article.dateTime || new Date().toISOString(),
          url: article.url || '#',
        })));
      } catch (err) {
        setError(err.message || 'Failed to fetch headlines. Check your API key or network.');
        // Fallback: Mock data for default headlines
        setHeadlines([
          {
            title: 'Sample Headline',
            source: { name: 'Sample Source' },
            publishedAt: new Date().toISOString(),
            url: '#',
          },
        ]);
      }
      setLoading(false);
    };
    fetchHeadlines();
  }, [country, category, searchQuery]);

  return { headlines, loading, error, country, setCountry, category, setCategory, searchQuery, setSearchQuery };
};

export default useNewsApi;