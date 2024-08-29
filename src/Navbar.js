import React, { useState } from "react";
import "./navbar.css"
function Navbar(){
    
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
    return (
        <>
            <div className="navbar">
                <div className="logoElements">logo</div>

                <div className="shopingCartElements">
                    <div className="shopingCart">
                        <img src="shopingCart.png" alt="" className="shopingCart"/>
                    </div>
                    <p>Cart 4</p>
                    <div className="login"></div>
                    <div className="dropdown">
                        <div className="dropdown-header" onClick={toggleDropdown}>
                            <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
                        </div>
                        {isOpen && (
                        <div className="login-singup">
                            <p className="dropdown-item">login</p>
                            <p className="dropdown-item">signup</p>
                        </div>
                           
                        )}
                </div>
            </div>
                

                
            </div>
        </>

    )

}
export default Navbar;