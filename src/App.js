
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './index.css';
import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Details from './details/Details.js';
import Footer from './Footer.js';
import About from './about/About.js';
import Contact from './contact/Contact.js';
import Login from './Login.js';
import Signup from './signup.js';
import CartPage from './Cartpage'; 
import ItemDetails from './itemDeatils/ItemDetails.js';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/itemDetails" element={<ItemDetails />} /> 
          <Route path="/details" element={<Details />} /> 
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
