import './index.css';
import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Details from './details/Details.js';
import Footer from './Footer.js';
import About from './about/About.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={< About />}/>
        </Routes>

      <Footer/>
    </>
  );
}

export default App;
