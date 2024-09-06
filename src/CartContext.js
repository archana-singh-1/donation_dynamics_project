import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/cart')
      .then(res => setCartItems(res.data))
      .catch(err => console.log(err));
  }, []);


  const addToCart = (item) => {
    axios.post('http://localhost:4000/cart', item)
      .then(res => setCartItems(prev => [...prev, res.data.cartItem]))
      .catch(err => console.log(err));
  };

 
  const removeFromCart = (id) => {
    axios.delete(`http://localhost:4000/cart/${id}`)
      .then(() => setCartItems(prev => prev.filter(item => item._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
