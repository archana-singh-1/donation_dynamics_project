import './index.css';
import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Details from './details/App.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
