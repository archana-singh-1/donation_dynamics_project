
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./donaier_details_col.css";
import { CartContext } from './CartContext';

function Donair_details_col({ details }) {
  const { addToCart } = useContext(CartContext);
  const [selectedAmount, setSelectedAmount] = useState(details.amount || 0);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [paymentFrequency, setPaymentFrequency] = useState('One time');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (frequency) => {
    setPaymentFrequency(frequency);
    setIsDropdownOpen(false);
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setIsOtherDropdownOpen(false);
  };

  const handleOtherAmountClick = () => {
    setIsOtherDropdownOpen(!isOtherDropdownOpen);
  };

  const handleOtherDropdownSelection = (amount) => {
    setSelectedAmount(amount);
    setIsOtherDropdownOpen(false);
  };

  const handleAddToCart = () => {
    const donationDetails = {
      ...details,
      amount: selectedAmount,
      paymentFrequency, 
    };
    addToCart(donationDetails);
  };

  return (
    <div className="col-sm-12 col-md-3">
      <img src={details.imgSrc} alt="" className="img_1" />
      <div className="fetchdataDetails">
        <p className="title">{details.title}</p>
        <p className="details">{details.description}</p>
        <p className="dolor">
          <span className="dolarshap">Rs</span> <span className="money">{selectedAmount}</span>
        </p>

      </div>

      <div className="addCart">
        <div className="monthly-giving">
          <div className="amount-options">
            <button className="amount-buttons" onClick={() => handleAmountChange(300)}>Rs <span>300</span></button>
            <button className="amount-button_1" onClick={() => handleAmountChange(350)}>Rs <span>350</span></button>
            <button className="amount-button_2" onClick={() => handleAmountChange(400)}>Rs <span>400</span></button>
            <button className="amount-button_3" onClick={handleOtherAmountClick}>Other</button>
          </div>

          {isOtherDropdownOpen && (
            <div className="other-amount-dropdown">
              <select
                className="other-amount-select"
                onChange={(e) => handleOtherDropdownSelection(parseInt(e.target.value))}
                value={selectedAmount}
              >
                <option value="">Select Amount</option>
                <option value="450">Rs450</option>
                <option value="500">Rs500</option>
                <option value="550">Rs550</option>
                <option value="600">Rs600</option>
                <option value="650">Rs650</option>
              </select>
            </div>
          )}

          <p className='frequency'>Donation frequency</p>

          <div className="dropdowns">
            <span className="arrows" onClick={toggleDropdown}>▼</span>
            {isDropdownOpen && (
              <div className="dropdown-menus">
                <p className="dropdown-items" onClick={() => closeDropdown('One time')}>One time</p>
                <p className="dropdown-items" onClick={() => closeDropdown('Monthly')}>Monthly</p>
              </div>
            )}
            <p>{paymentFrequency}</p>
          </div>
        </div>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>+ Add to cart</button>

      <button className='arrowBtn'>
          <Link 
            to="/itemDetails"
            state={{ details, selectedAmount }}
          >
            <img src="right_arrow.png" alt="" className='right_arrow'/>
          </Link>
        </button>
    </div>
  );
}

export default Donair_details_col;
