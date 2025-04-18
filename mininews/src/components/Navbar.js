// Navbar.js
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => (
  <nav className="bg-gray-900 border-b border-gray-800 py-4 px-6">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center space-x-6 mb-4 sm:mb-0">
        <Link 
          to="/" 
          className="text-white font-medium hover:text-gray-300 transition-colors"
        >
          NewsExplorer
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            to="/" 
            className="text-gray-300 text-sm hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/saved" 
            className="text-gray-300 text-sm hover:text-white transition-colors"
          >
            Saved
          </Link>
        </div>
      </div>
      
      <SearchBar />
    </div>
  </nav>
);

export default Navbar;