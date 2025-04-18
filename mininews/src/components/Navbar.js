import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000000;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
`;

const NavLinks = styled.div`
  a {
    font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 0 16px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #3B82F6;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`;

const Navbar = () => (
  <Nav>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/saved">Saved</Link>
    </NavLinks>
    <SearchBar />
  </Nav>
);

export default Navbar;