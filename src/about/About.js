import "./about.css"
function About(){
    return(
        <div className="aboutContainer">
            <h2 className="aboutus">About Us</h2>
            <div className="aboutBack">
            <img src="aboutBack.jpg" alt="" className="aboutBackgroundImg" />
            </div>
        
            <h2 className="weDo">What we do</h2>
            <p className="detailsAboutUs">Environmental Farmers Group does what it says on the label – and more. We’re a new company set up by farmers for farmers, so that we can work together to improve our farmed environment and trade confidently with business and commercial organisations in the natural capital markets. We use the expertise of the organisations we work with to trade:</p>
            
            <h2 className="improvements">Biodiversity improvements : <span className="bng">through BNG offset markets and voluntary biodiversity markets.</span></h2>
            <h2 className="improvements">Water quality, supply and flood risk management changes : <span className="bng">through nutrient offset markets.</span></h2>
            <h2 className="improvements">Getting to Carbon Net Zero : <span className="bng">through voluntary carbon offset and emissions reduction markets. </span></h2>

            <p className="groups">To put it very simply, it makes sense to have a group of accredited, progressive farmers ready to trade through a single hub. This makes it easier for both the farmer and the organisation seeking the trade. We aim to provide the role of a trusted navigator in a complex new world.</p>

            <h2  className="weDo">Why it works</h2>

            <p className="FarmersGroup ">Environmental Farmers Group is going from strength to strength. It works closely with the key stakeholders within the Green Finance Industry and its model is highlighted in several major industry reports, including the government’s.</p>

            <p className="key">There are three key benefits of the model:</p>

            <h2 className="led">Farmer led – <span className="run_by">We are run by farmers, for farmers. We believe, by working collaboratively, farmers can deliver ambitious environmental outcomes and should earn a fair reward for doing this. The farmers retain decision-making control; each farmer decides how much or how little s/he contributes to the whole EFG’s outcomes.</span></h2>
            <h2 className="led">Scale to suit – <span className="run_by">Built from the bottom up, EFG brings farmers together to create an effective structure of scale. This provides farmers much easier access to a much wider marketplace and buyers with the ability to work with many farmers on the ground through a single organisation. </span></h2>
            <h2 className="led">Shared resource –  <span className="run_by">By joining the EFG farmers have access to a large amount of information and expertise on the natural capital sector. EFG acts as a trusted navigator for its farmer members. What’s more, farmers get to meet each other and share information about environmental changes and trading opportunities.</span></h2>
                
            
            
        </div>
    )
}
export default About;