

function Gallery ({ darasa, title, sub, rate}){
    return(
        <div className={darasa} id="card">
            <span>{rate}</span>
            <div className="text">
                <h3>{title}</h3>
                <h5>{sub}</h5>
            </div>
        </div>
    );
}

const Destination = () => {
    return ( 
        <div className="destinations">
            <div className="nav">
                <div className="left">
                    <h3>Top Destinations</h3>
                    <span>Some Brilliant reasons travelog should be your one-stop-shop</span>
                </div>
                <button>Check All</button>
            </div>
            <div className="gallery">
                <div className="left">
                    <Gallery  darasa="vietnam" rate="4.5" title="Vietnam" sub="Culture" />
                    <Gallery darasa="train" rate="4.2" title="Old Rain" sub="Train track" />
                </div>
                
                <Gallery darasa="mid" rate="4.9" title="Kenya" sub="Safari" />

                <div className="right">
                    <Gallery darasa="london" rate="4.2" title="London" sub="Kingdom" />
                    <div className="bottom">
                        <Gallery darasa="kenya" rate="4.7" title="Greece" sub="Beaches" />
                        <Gallery darasa="paris" rate="4.7" title="Paris" sub="Eiffel" />
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Destination;