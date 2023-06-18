import { IonIcon } from "@ionic/react";
import { addCircleOutline, arrowForwardSharp, reloadCircleOutline } from "ionicons/icons";
// import globe from '../images/icons/worldwide.png';
import map from '../images/icons/world-map.png';
import visa from '../images/icons/money.png';
import master from '../images/icons/visa.png';
import paypal from '../images/icons/shopping.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="sub-nav">
                <div className="left">
                    <div className="icon">
                        <IonIcon id="ion" icon={addCircleOutline} />
                        <span>Quick Links</span>
                    </div>
                    <h3>Explore more categories</h3>
                </div>
                <h5>0123-456-789-10 | hello@travelog.com</h5>
            </div>
            <div className="dash"></div>
            <div className="nav">
                <div className="left">
                    <h5>Get in touch</h5>
                    <h3>Adventure Calling <br /> You Guys!</h3>
                </div>
                <div className="right">
                    <span>Our Offices</span>
                    <h6>Kenya, Nepal, Egypt</h6>
                    <IonIcon id="ion" icon={arrowForwardSharp} />            
                </div>
            </div>
            {/* <div className="dash"></div> */}
            <div className="main-footer">
                <img src={map} alt="map" />
                <div className="content">
                    <h4>Get in Touch</h4>
                    <h2>Let's Talk </h2>
                    <IonIcon id="ion" icon={arrowForwardSharp} />
                    <form action="/">
                        <input 
                            type="text"
                            className="footer-input"
                            placeholder="Enter your email"
                        />
                        <button type="submit">Send Now</button>
                    </form>
                </div>
            </div>
            <div className="bottom-footer">
                <h4>Privacy Policy</h4>
                <h3>Linkedin / Facebook / Instagram</h3>
            </div>
            <div className="dash end"></div>
            <div className="card">
                <div className="left">
                    <span>2023 <IonIcon icon={reloadCircleOutline} /> Travelog</span>
                </div>
                <div className="right">
                    <img src={visa} alt="visa" />
                    <img src={master} alt="master" />
                    <img src={paypal} alt="paypal" /> 
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
