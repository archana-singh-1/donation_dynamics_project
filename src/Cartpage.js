import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: Rs {item.amount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
