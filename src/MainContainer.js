import { Link } from 'react-router-dom';
import "./mainContainer.css"
import AddCart from './AddCart.js';
import MainContains from './MainConatin.js';



function MainContainer(){
    return(
        <div className="mainContainer">
            <div className="containerDetails">
                <Link to="/details" className="link">
                    <img src="background.png" alt="background" className="backgroundImage" />
                </Link>
                <Link to="/details" className="link">
                    <button className='explore'>Explore <img src="right_arrow.png" alt='' className='right_arrow'/></button>
                </Link>
                <div className="heading">Empowering Agriculture for a Sustainable Future</div>
                <AddCart/>
            
            </div>
            <MainContains/>
        </div>
    )

}
export default MainContainer;