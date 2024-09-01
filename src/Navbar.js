import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
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

      <div className="shopingCartElements">
        <div className="shopingCart">
          <img src="shopping_cart.png" alt="Shopping Cart" className="shopingCart" />
        </div>
        <p className="cart">Cart 4</p>
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
