import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async ({ country = 'us', category = '', page = 1, pageSize = 20 }) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        category,
        page,
        pageSize,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch headlines');
  }
};

export const searchNews = async ({ query, page = 1, pageSize = 20 }) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        page,
        pageSize,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to search news');
  }
};