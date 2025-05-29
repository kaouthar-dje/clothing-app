import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-section navbar-center">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="navbar-section navbar-right">
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
