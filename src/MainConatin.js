import "./mainContains.css"
import DonaierDetailsContainer from "./Donair_details_container";
import {data} from "./dummy_data.js"
function MainContains(){
    return(
        <div className="container-fluid">
            <DonaierDetailsContainer details={data[0]} details1={data[1]} details2={data[2]} />
            <DonaierDetailsContainer details={data[3]} details1={data[4]} details2={data[5]} />
            <DonaierDetailsContainer details={data[6]} details1={data[7]} details2={data[8]} />
        </div>
            
    )

}
export default MainContains;