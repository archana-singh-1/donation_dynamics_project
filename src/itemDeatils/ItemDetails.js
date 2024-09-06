import React from 'react';
import { useLocation } from 'react-router-dom';
import "./itemDetails.css"

function ItemDetails() {
  const location = useLocation();

  
  const { details, selectedAmount } = location.state || {};

  if (!details) {
    return <p>No details available</p>; 
  }

  return (
    <div className='itemConatn'>
      <h2 className='itemTitle'>{details.title}</h2>
      <img src={details.imgSrc } alt={details.title }  className='itemImg'/>
      <p className='itemAmount'> Rs {selectedAmount}</p>
      <p className='itemdetails'>{details.description}</p>
    </div>
  );
}

export default ItemDetails;
