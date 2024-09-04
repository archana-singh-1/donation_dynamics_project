import React, { useContext, useState } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logoElements">
        <div className="agriculture">
          <img src="farmerIcon.png" alt="Agriculture Icon" className="agriculture" />
        </div>
        <p className="logoP">Farmer Harvest</p>
      </div>
      <div className='contact_us '>
        <div className='about_div'>  <Link to="/about"  className='aboutLink'>About</Link ></div>
        <div className='contact_div'>  <Link to="/contact"  className='contactLink'>Contact</Link></div>

      </div>

      <div className="shopingCartElements">
        <Link to="/cart" className="no-underline">
          <div className="shopingCart">
            <img src="shopping_cart.png" alt="Shopping Cart" className="shopingCart" />
            <p className="cart">Cart <span>{cartItems.length}</span></p>
          </div>
        </Link>
        <div className="login">
          <img src="image.webp" alt="User" className="circleimage" />
        </div>
        <div className="dropdown">
          <span className="arrow" onClick={toggleDropdown}>▼</span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/signup" className="dropdown-item" onClick={closeDropdown}>Signup</Link>
              <Link to="/login" className="dropdown-item" onClick={closeDropdown}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
