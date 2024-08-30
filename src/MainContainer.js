import { Link } from 'react-router-dom';
import "./mainContainer.css"
import DonaierDetailsContainer from "./Donair_details_container";
import AddCart from './AddCart.js';
import {data} from "./dummy_data.js"


function MainContainer(){
    return(
        <div className="mainContainer">
            <div className="containerDetails">
                <Link to="/details" className="link">
                    <img src="background.png" alt="background" className="backgroundImage" />
                </Link>
                <div className="heading">Empowering Agriculture for a Sustainable Future</div>
                <AddCart/>
            
            </div>

            <DonaierDetailsContainer details={data[0]} details1={data[1]} details2={data[2]} />
            <DonaierDetailsContainer details={data[3]} details1={data[4]} details2={data[5]} />
            <DonaierDetailsContainer details={data[6]} details1={data[7]} details2={data[8]} />
        </div>
    )

}
export default MainContainer;