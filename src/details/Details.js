import "./details.css"
function Details(){
    return (
        <div className="container">
            <h2 className="give_donation">give.donation</h2>
            <p className="best">India's best online donation platform.</p>
            <div className="detailsBackground">
            <img src="detailsBackground.jpg" alt="" className="detailsBackgroundImg" /></div>
            <div className="textConatin">
                <h3 className="donateFarmer">Donate to Agriculture and Farmers</h3>

                <p className="welcome">Welcome to Bharatiya Jana Seva Mission , best Indian NGO working on Agriculture Development & Farmers Welfare in india , Where we are dedicated to revolutionzing agriculture through sustainable practies. Our mission is to provide farmers with the tools, knowledge, and resources they need to adopt modern and climate-smart agriculture practices.<br/></p>

            </div>
            <p className="support">  Your support can make a lasting impact on their lives and contribute to a healtheir planet</p>
            <p className="joinwithUs">Join us in this journey of growth and sustainability by making donation Today.</p>

            <div className="areas">
                <img src="team.jpg" alt="" className="teamImg"/>
                <h3 className="impact">Areas Your Donation Wil Impact:</h3> 
                <h2 className="Machinery"> Agriculture Machinery  :<span className="helpUs">Help Us , the top NGO for farmers supporting to equip farmers with advanced agriculture Machinery . By introducing modern tools, we aim to enhance efficiney, reduce labor, and promote sustainable farming techniques that benefit both farmers and the environment in Indian.</span></h2>
                <h2 className="organic"> Seed & Organic Manure : <span className="seed"> Contribute to Bharatiya Jana Seva Mission , the ranked NGO for Agriculture to purchase of high-quaility seeds and organic manure, promoting healthier soil and sustainable farming practies. your donation helps us provide farmers with the foundation for bountiful and eco-friendly harverst in Bangalore.</span></h2>
                <h2 className="farmers">Farmers Education : <span className="educationSupport">Support our educational programs that empower with knowledge on modern and climate-smart agriculture practices.Your donation ensure that farmers are well-infomed, enabling them to make sustainable choices and adapt to the challenges of a changing climate in India.</span></h2>
                
                
            </div>
            
        </div>
    )

}
export default Details;