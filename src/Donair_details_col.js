import "./donaier_details_col.css"
function Donair_details_col({details}){
    return(
        <div className=" donair_details_col">
            <img src={details.imgSrc} alt="" className="img_1"/>
            <p className="title">{details.title}</p>
            <p className="details">{details.description}</p>

        </div>
    )

}
export default Donair_details_col;