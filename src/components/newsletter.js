


const Newsletter = () => {
    return ( 
        <div className="grapher">
            <div className="upper-container">
                <h3>Tour the World from Your Couch with <br /> #ExperienceLive!</h3>
                <span>To Kickstart your digital adventures with Travelog</span>
                <button className="grapher-btn">Check All</button>
            </div>
            <div className="bottom-container">
                <div className="gallery">
                    <div className="p1"></div>
                    <div className="p2-3">
                        <div className="p2"></div>
                        <div className="p3"></div>
                    </div>
                </div>
                <div className="newsletter">
                    <h5>Subscribe For Offers</h5>
                    <h2>Adventure Calling You Guys!</h2>
                    <p>The brilliant reasons Travelog should be your one-stop-shop!</p>
                    <form action="/">
                        <input 
                            type="text"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            required 
                        />
                        <button type="submit">Send Now!</button>
                    </form>
                    <span>Expect a reply in 2-3 working days</span>
                </div>
            </div>
        </div>
     );
}
 
export default Newsletter;