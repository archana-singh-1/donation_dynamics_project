import "./navbar.css";

function Navbar() {
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
          <span className="arrow">▼</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;