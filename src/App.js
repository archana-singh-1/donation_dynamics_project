import React from 'react';
import './index.css';
import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Details from './details/Details.js';
import Footer from './Footer.js';
import About from './about/About.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './Login.js';
import Signup from './signup.js';
import CartPage from './Cartpage'; 



function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={< About />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
