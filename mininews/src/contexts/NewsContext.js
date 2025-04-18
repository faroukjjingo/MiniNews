import { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
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