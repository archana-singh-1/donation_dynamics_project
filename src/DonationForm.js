import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import "./donationForm.css";

function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
    image: null
  });

  const { addToCart } = useContext(CartContext);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: formData.name,
      email: formData.email,
      description: formData.message,
      amount: parseFloat(formData.amount),
      imgSrc: formData.image ? URL.createObjectURL(formData.image) : ''
    };

    addToCart(newItem);
    alert("Thank you for your donation! Your donation has been added to the cart.");
    setFormData({ name: '', email: '', amount: '', message: '', image: null });
  };

  return (
    <div className="donation-form-container">
      <h2 className='donateHere'>Donate here</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder='Enter Your Name'
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder='Enter Your Email'
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Donation Amount (Rs):</label>
          <input 
            type="number" 
            name="amount" 
            placeholder='Enter Your Amount'
            value={formData.amount} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message (Optional):</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Image (Optional):</label>
          <input 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="donate-button">Donate Now</button>
      </form>
    </div>
  );
}

export default DonationForm;
