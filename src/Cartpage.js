import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import "./cartpage.css"

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2 className='Your_Cart'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='empty'>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className='addCartData'>
               <img src={item.imgSrc} alt="" className="img_1" />
              <h3 className='title'>{item.title}</h3>
              <p className='details'>{item.description}</p>
              <p className='moneys'>Rs {item.amount}</p>
            
           </div>
         
          ))}
        </>
      )}
    </div>
  );
}

export default CartPage;
