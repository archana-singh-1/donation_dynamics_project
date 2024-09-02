import "./addCart.css"
function AddCart(){
    return(
        <div className="addCart">
            <div class="monthly-giving">
            <h3 className="Monthly_Giving">Monthly Giving</h3>
            <p className="contribution">Join our sustainer program and provide ongoing support. Your contribution makes a world of difference.</p>
            <p className="dolor"><p className="dolarshap">Rs</p> <span className="money">50</span></p>
         
            <div className="amount-options">
                <button className="amount-buttons">$50</button>
                <div className="otherButton">
                    <button className="amount-button_1">$25</button>
                    <button className="amount-button_2">$10</button>
                    <button className="amount-button_3">Other</button>
                </div>
              
            </div>
            <button class="add-to-cart">+ Add to cart</button>
        </div>
        </div>
    )

}
export default AddCart;