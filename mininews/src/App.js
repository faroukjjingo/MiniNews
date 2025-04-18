import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewsProvider } from './contexts/NewsContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Article from './pages/Article';
import Saved from './pages/Saved';
import './App.css';

function App() {
  return (
    <NewsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:url" element={<Article />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </NewsProvider>
  );
}

export default App;