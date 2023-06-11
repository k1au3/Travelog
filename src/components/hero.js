import { IonIcon } from "@ionic/react";
import {search, logoFacebook, logoInstagram, logoYoutube, chevronBackCircleOutline, chevronForwardCircleOutline, mailOutline, pencilOutline,  checkmarkCircleOutline} from 'ionicons/icons';
import React, { useState } from 'react';
import egypt from '../images/hero/egypt.jpg';
import himalaya from '../images/hero/himalaya1.jpg';
import beach from '../images/hero/beach1.jpg';
import mount from '../images/hero/mount1.jpg';
import cc from '../images/icons/credit-cards.png';
import swimming from '../images/icons/swimming.png';
import wifi from '../images/icons/wifi.png';
import ac from '../images/icons/air-conditioning.png';
import dinner from '../images/icons/serving-dish.png'



//button component
export function Button({className, children}) {
    return(
        <button className={className}>{children}</button>
    );
}

//nav

function Nav(){
    return(
        <nav>
            <div className="left">
                <h2 className="logo">
                    Travelog
                </h2>
                <ul>
                    <li>Destination</li>
                    <li>Activities</li>
                    <li>Specials</li>
                    <li><IonIcon icon={search} /></li>
                </ul>
            </div>
            <div className="right">
                <Button className="btn">Login </Button>
                <Button className="btn">Sign up</Button>
            </div>
        </nav>
    );
}

//carousel array

    const SingleCarousel = [
        {
            id:1,
            sub: 'The Himalayan Mountain Ranges',
            title: 'Nepal Country',
            temp: 'Very cold',
            url: himalaya
        },
        {
            id: 2,
            sub: 'Warm Sandy Beaches',
            title: 'Malindi County',
            temp: 'Warm Tropical',
            url: beach
        },
        {
            id:3,
            sub: 'Freezing Tempratures and Snow',
            title: 'Mount Everest',
            temp: 'Freezing',
            url: mount
        },
        {
            id:4,
            sub: 'Pyramids of Giza',
            title: 'Ancient Egypt',
            temp: 'Hot Dry ',
            url: egypt
        }
    ];

    //hero

    const Carousel = ({ cards }) => {
        const [currentCardIndex, setCurrentCardIndex] = useState(0);
        const currentCard = cards[currentCardIndex];

        //handle next button click
        const handleNext = () => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        };

        //Handle previous button click
        const handlePrevious = () => {
            setCurrentCardIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex -1);
        };

        return(
            <div
             className="carousel" 
             style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: 'white',
                backgroundImage: `url(${currentCard.url})` }}>
                <div className="h5">
                    <div className="dash"></div>
                    <h5>{currentCard.sub}</h5>
                </div>
                <h2>{currentCard.title}</h2>
                <div className="bottom">
                    <div className="left">
                        <span>{currentCard.temp}</span>
                        <div className="navigation">
                            <button className="nav-btn" onClick={handlePrevious}><IonIcon icon={chevronBackCircleOutline} /></button>
                            <button className="nav-btn" onClick={handleNext}><IonIcon icon={chevronForwardCircleOutline} /></button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={cc} alt="cc" />
                        <div className="para">
                            <p>We Accept Payment Through All cards & Banking</p>
                            <Button className="hero-btn">Book Now!</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
  
    
function FloatingIcons({source, title}){
    return(
        <div className="icons">
            <img src={source} alt="icon" />
            <h6>{title}</h6>
        </div>
    );
}
const Hero = () => {
    return ( 
        <div className="hero">
            <div className="social">
                <div className="logos">
                    <IonIcon className="icon" icon={logoFacebook} />
                    <IonIcon className="icon" icon={logoInstagram} />
                    <IonIcon className="icon" icon={logoYoutube} />
                    <IonIcon className="icon" icon={mailOutline} />
                </div>
                <span>WhatsApp +254 12 345 678</span>
            </div>
            <div className="dash"></div>
            <Nav />
            <div className="main">
                <Carousel cards={SingleCarousel}/>

                {/* margin  */}
                <div className="float">
                    <div className="facilities">
                        <div className="up">
                            <h3>Facilities</h3>
                            <span>See More</span>
                        </div>
                        <div className="bottom">
                            <FloatingIcons source={swimming} title="Pool" />
                            <FloatingIcons source={wifi} title="Wi-Fi" />
                            <FloatingIcons source={ac} title="AC" />
                            <FloatingIcons source={dinner} title="Dinner" />
                        </div>
                    </div>
                    <div className="for-you">
                        <div className="top">
                            <h3>Hotels For You</h3>
                            <span>150 results</span>
                            <div className="ion">
                                <IonIcon id="icon" icon={pencilOutline} />
                                <IonIcon id="icon" icon={search} />
                            </div>
                            
                        </div>
                        <div className="mid">
                            <span>5 Days 6 Nights</span>
                        </div>
                            
                        <div className="bottom">
                                <Button className="float-btn"><IonIcon id="ion" icon={checkmarkCircleOutline} /> Ksh 11,000
                                </Button>
                                <div className="profiles">
                                    <img src={himalaya} alt="beach" />
                                    <img src={beach} alt="swmming" />
                                    <img src={mount} alt="breakfast" />
                                    <img src={egypt} alt="dinner" />
                                    <img src={mount} alt="shore" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;
