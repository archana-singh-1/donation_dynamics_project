import React, { useState } from 'react';
import "./donationForm.css"

function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your donation!");
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
            placeholder=' Enter Your Name'
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
            placeholder='Enter Your Amounts'
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
        <button type="submit" className="donate-button">Donate Now</button>
      </form>
    </div>
  );
}

export default DonationForm;
