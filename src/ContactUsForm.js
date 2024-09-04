import React, { useState } from 'react';
import "./contactUsForm.css"

function DonationContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    donationAmount: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
    setFormData({ name: '', email: '', donationAmount: '', message: '' });
  };

  return (
    <div className="donation-contact-form-container">
      <h2 className=' contactushTwo'>Contact Us for Donations</h2>
      <form onSubmit={handleSubmit} className="donation-contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
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
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Donation Amount (Rs):</label>
          <input
            type="number"
            name="donationAmount"
            placeholder="Enter your donation amount"
            value={formData.donationAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Enter your message (optional)"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="donate-button">Submit</button>
      </form>
    </div>
  );
}
export default DonationContactForm;
