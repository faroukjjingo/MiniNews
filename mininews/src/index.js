// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NewsProvider } from './contexts/NewsContext';

// Create a root element for React 18's concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with all providers
root.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>
);