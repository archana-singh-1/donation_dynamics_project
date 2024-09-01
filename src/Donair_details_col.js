import "./donaier_details_col.css"
function Donair_details_col({details}){
    return(
        <div className="col-sm-12 col-md-3">
            <img src={details.imgSrc} alt="" className="img_1"/>
            <p className="title">{details.title}</p>
            <p className="details">{details.description}</p>

            <div className="addCartDetails">
                <p className="dolor"><p className="dolarshap">Rs</p> <span className="money">{details. amount}</span></p>
               

            </div>

            <button class="add-to-cart">+ Add to cart</button>

        </div>
    )

}
export default Donair_details_col;