import "./contact.css";
import  DonationContactForm from "../ContactUsForm";
function Contact (){
    return(
        <div className="contactContainer">
            <img src="conatc.avif" alt="" className="aboutImage"/>
            <h4 className="conatctHeader">Together, We Can Create a Brighter Future .</h4>

            <div className="rating">
                <div className="succes">
                    <div className="image_box">
                        <img src="success.png" className="image_1"/>
                    </div>
                    <div className="rating_box">
                        <h3 className="p_tag">99k</h3>
                        <p className="stories">Success Stories</p>
                    </div>
                    

                </div>

                <div className="succes">
                    <div className="image_box"> 
                        <img src="succes_2.png" className="image_1"/>
                    </div>
                    <div className="rating_box">
                        <h3 className="p_tag">5k</h3>
                        <p className="stories">Adopted farmer's</p>
                    </div>
                    

                </div>

                <div className="succes">
                    <div className="image_box">
                        <img src="/succes_3.png" className="image_1"/>
                    </div>
                    <div className="rating_box">
                        <h3 className="p_tag">25+</h3>
                        <p className="stories">Non-profit communities</p>  
                    </div>
                    

                </div>


                <div className="succes">
                    <div className="image_box">
                        <img src="succes_4.png" className="image_1"/>
                    </div>
                    <div className="rating_box">
                        <h3 className="p_tag">260+</h3>
                        <p className="stories">working volunteers</p>
                    </div>
                    

                </div>



                

            </div>
        <DonationContactForm/>
        </div>

    )
    

}
export default Contact;
