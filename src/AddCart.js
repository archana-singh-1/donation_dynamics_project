import "./addCart.css"
function AddCart(){
    return(
        <div className="addCart">
            <div class="monthly-giving">
            <h3>Monthly Giving</h3>
            <p>Join our sustainer program and provide ongoing support. Your contribution makes a world of difference.</p>
            <div class="amount-options">
                <button class="amount-button">$50</button>
                <button class="amount-button">$25</button>
                <button class="amount-button">$10</button>
                <button class="amount-button">Other</button>
            </div>
            <button class="add-to-cart">+ Add to cart</button>
        </div>
        </div>
    )

}
export default AddCart;