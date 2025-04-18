import axios from 'axios';

const API_KEY = process.env.REACT_APP_MEDIASTACK_API_KEY;
const BASE_URL = 'http://api.mediastack.com/v1';

export const fetchTopHeadlines = async ({
  country = 'us',
  category = '',
  sources = '',
  languages = '',
  sort = 'published_desc',
  date = '',
  page = 1,
  pageSize = 20,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
      params: {
        access_key: API_KEY,
        countries: country || undefined,
        categories: category || 'general',
        sources: sources || undefined,
        languages: languages || undefined,
        sort,
        date: date || undefined,
        limit: pageSize,
        offset: (page - 1) * pageSize,
      },
    });
    console.log('Top Headlines Response:', response.data);
    return {
      status: 'ok',
      totalResults: response.data.pagination.total,
      articles: response.data.data.map(article => ({
        source: { id: null, name: article.source || 'Unknown' },
        author: article.author || null,
        title: article.title || 'No Title',
        description: article.description || '',
        url: article.url || '#',
        urlToImage: article.image || null,
        publishedAt: article.published_at || new Date().toISOString(),
        content: article.description || '',
      })),
    };
  } catch (error) {
    console.error('Fetch Headlines Error:', error.response?.data || error.message);
    throw new Error('Failed to fetch headlines');
  }
};

export const searchNews = async ({
  query,
  sources = '',
  languages = '',
  sort = 'published_desc',
  date = '',
  page = 1,
  pageSize = 20,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
      params: {
        access_key: API_KEY,
        keywords: query,
        sources: sources || undefined,
        languages: languages || undefined,
        sort,
        date: date || undefined,
        limit: pageSize,
        offset: (page - 1) * pageSize,
      },
    });
    console.log('Search News Response:', response.data);
    return {
      status: 'ok',
      totalResults: response.data.pagination.total,
      articles: response.data.data.map(article => ({
        source: { id: null, name: article.source || 'Unknown' },
        author: article.author || null,
        title: article.title || 'No Title',
        description: article.description || '',
        url: article.url || '#',
        urlToImage: article.image || null,
        publishedAt: article.published_at || new Date().toISOString(),
        content: article.description || '',
      })),
    };
  } catch (error) {
    console.error('Search News Error:', error.response?.data || error.message);
    throw new Error('Failed to search news');
  }
};

export const fetchSources = async ({ search = '', countries = '', languages = '', categories = '' }) => {
  try {
    const response = await axios.get(`${BASE_URL}/sources`, {
      params: {
        access_key: API_KEY,
        search: search || undefined,
        countries: countries || undefined,
        languages: languages || undefined,
        categories: categories || undefined,
      },
    });
    console.log('Sources Response:', response.data);
    return response.data.data.map(source => ({
      id: source.id,
      name: source.name,
      category: source.category,
      country: source.country,
      language: source.language,
      url: source.url,
    }));
  } catch (error) {
    console.error('Fetch Sources Error:', error.response?.data || error.message);
    throw new Error('Failed to fetch sources');
  }
};