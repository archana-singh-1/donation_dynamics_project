import "./donaier_details_col.css"
function Donair_details_col({details}){
    return(
        <div className=" donair_details_col">
            <p>{details.details}</p>
        </div>
    )

}
export default Donair_details_col;