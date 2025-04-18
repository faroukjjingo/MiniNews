// src/services/newsApi.js
import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export const fetchTopHeadlines = async (params) => {
  const response = await newsApi.get('/top-headlines', {
    params: {
      ...params,
      apiKey: process.env.REACT_APP_NEWSAPI_KEY,
    },
  });
  return response.data.articles;
};