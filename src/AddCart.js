import "./addCart.css"
function AddCart(){
    return(
        <div className="addCart">
            <div class="monthly-giving">
            <h3>Monthly Giving</h3>
            <p className="headline">Join our sustainer program and provide ongoing support. Your contribution makes a world of difference.</p>
            <p className="dolor"><p className="dolarshap">$</p> <span className="money">50</span> <p className="usd"> USD </p></p>
         
            <div class="amount-options">
                <button class="amount-buttons">$50</button>
                <div className="otherButton">
                    <button class="amount-button_1">$25</button>
                    <button class="amount-button_2">$10</button>
                    <button class="amount-button_3">Other</button>
                </div>
              
            </div>
            <button class="add-to-cart">+ Add to cart</button>
        </div>
        </div>
    )

}
export default AddCart;