import React, { useState } from 'react';
import axios from 'axios'; 
import './login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email,
        password
      });
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || 'Something went wrong'));
    }
  };

  return (
    <div className="login-container">
      <h2 className='loginHeader'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className='loginButton'>Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Login;