import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import "./cartpage.css";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext); 
  const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="cart-page">
      <h2 className='Your_Cart'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='empty'>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className='addCartData' key={index}>
              {item.imgSrc && <img src={item.imgSrc} alt="Donation" className="img_1" />}
              {item.name && <p className='details'>Name: {item.name}</p>}
              {item.email && <p className='details'>Email: {item.email}</p>}
              <p className='moneys'> Rs {item.amount}</p>
              <p className='details'>{item.description}</p>
              <p className='details'>{item.paymentFrequency}</p> 

              <button 
                className="delete-btn" 
                onClick={() => removeFromCart(index)}>
                <img src="deleteIcon.png" className='deleteIcon'/>
              </button>
            </div>
          ))}

          <div className='totalAmount'>
            <h3 className='total'>Total: Rs {totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
