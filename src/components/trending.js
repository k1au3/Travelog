import { IonIcon } from '@ionic/react';
import { checkmarkSharp, chevronBackCircleOutline, chevronForwardCircleOutline, heartOutline, star, timeOutline } from 'ionicons/icons';
import React, { useRef } from 'react';


const Trending = ({Data}) => {

    const listRef = useRef(null);

    const scrollLeft = () => {
        listRef.current.scrollBy({
            left: -500,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        listRef.current.scrollBy({
            left: 500,
            behavior: 'smooth',
        });
    };
    return ( 
        <div className="trending-list-container">
            <div className="nav">
                <h3>Trending</h3>
                <div className="nav-buttons">
                    <button onClick={scrollLeft}><IonIcon icon={chevronBackCircleOutline} /></button>
                    <button onClick={scrollRight}>< IonIcon icon={chevronForwardCircleOutline} /></button>
                </div>
            </div>
            <div className="trending-list" ref={listRef}>
                {Data.map((data) => (
                    <div className="trending-card" key={data.id}>
                        <img src={data.url} alt={data.title} />

                        <div className="title-cont">
                            <div className="left">
                                <h3>{data.title}</h3>
                                <h6>{data.sub}</h6>
                            </div>
                            <IonIcon id='icon' icon={heartOutline} />
                        </div>

                        <div className="price-cont">
                            <div className="left">
                                <span>from</span>
                                <h3>{data.price}</h3>
                                <span>*Price varies</span>
                            </div>
                            <div className="right">
                                <div className="star">
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                </div>
                                <h3>{data.rating}</h3>
                            </div>
                        </div>
                        <div className="cancel">
                            <IonIcon id='icon' icon={timeOutline} />
                            <span id='span'>7 Days</span>
                            <IonIcon id='icon' icon={checkmarkSharp} />
                            <span>Free Cancellation</span>
                        </div>
                    </div>
                ))} 
            </div>
            
        </div>
     );
}
 
export default Trending;