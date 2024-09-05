import React, { useContext } from 'react';
import "./donaier_details_col.css";
import { CartContext } from './CartContext';

function Donair_details_col({ details }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(details);
  };

  return (
    <div className="col-sm-12 col-md-3">
      <img src={details.imgSrc} alt="" className="img_1" />
      <div className="fetchdataDetails">
        
        <p className="title">{details.title}</p>
     
        <p className="dolor"><span className="dolarshap">Rs</span> <span className="money">{details.amount}</span></p>

        <p className="details">{details.description}</p>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>+ Add to cart</button>
    </div>
  );
}

export default Donair_details_col;
