import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import "./cartpage.css"

function CartPage() {
  const { cartItems } = useContext(CartContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);

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

            <div className='totalAmount'>
                <h3 className='total'>Total: Rs {totalAmount}</h3>
            </div>
        </>
        
      )}
    </div>
  );
}

export default CartPage;
