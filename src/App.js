import './index.css';
import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Details from './details/Details.js';
import Footer from './Footer.js';
import About from './about/About.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './Login.js';
import Signup from './signup.js';

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={< About />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer/>

    </>
  );
}

export default App;
