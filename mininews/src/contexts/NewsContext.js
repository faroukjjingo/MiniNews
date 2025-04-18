import { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [sources, setSources] = useState(''); // e.g., 'cnn,-bbc'
  const [languages, setLanguages] = useState(''); // e.g., 'en,-de'
  const [sort, setSort] = useState('published_desc'); // Default: newest first
  const [date, setDate] = useState(''); // e.g., '2025-04-18' or '2025-04-01,2025-04-18'
  const [savedArticles, setSavedArticles] = useState(
    JSON.parse(localStorage.getItem('savedArticles')) || []
  );

  const saveArticle = (article) => {
    const updated = [...savedArticles, article];
    setSavedArticles(updated);
    localStorage.setItem('savedArticles', JSON.stringify(updated));
  };

  const removeArticle = (url) => {
    const updated = savedArticles.filter((article) => article.url !== url);
    setSavedArticles(updated);
    localStorage.setItem('savedArticles', JSON.stringify(updated));
  };

  return (
    <NewsContext.Provider
      value={{
        country,
        setCountry,
        category,
        setCategory,
        query,
        setQuery,
        sources,
        setSources,
        languages,
        setLanguages,
        sort,
        setSort,
        date,
        setDate,
        savedArticles,
        saveArticle,
        removeArticle,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);