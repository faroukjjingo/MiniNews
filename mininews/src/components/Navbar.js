import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #3498db;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
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