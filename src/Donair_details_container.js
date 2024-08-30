import "./donair_details_container.css"
import Donair_details_col from "./Donair_details_col";

function DonaierDetailsContainer({ details, details1, details2 }) {
    return (
        <div className="donair_details_container">
            <Donair_details_col details={details} />
            <Donair_details_col details={details1} />
            <Donair_details_col details={details2} />
        </div>
    );
}
export default DonaierDetailsContainer;