import { IonIcon } from "@ionic/react";
import { ActivityData } from "../data/data";
import React, { useState } from 'react';
import {  chevronBackCircleOutline,  chevronForwardCircleOutline } from "ionicons/icons";

const Activities = ({Data}) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 5;

    const handlePrevious = () => {
        setStartIndex((prevIndex) => prevIndex - itemsPerPage);
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => prevIndex + itemsPerPage);
    };

    const visibleActivities = ActivityData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="row">
            <div className="nav">
                <h3>Select category</h3>
                <div className="navigation-buttons">
                    {startIndex > 0 && <button onClick={handlePrevious}><IonIcon icon={chevronBackCircleOutline} /></button>}
                    {startIndex + itemsPerPage < ActivityData.length && (
                        <button onClick={handleNext}><IonIcon icon={chevronForwardCircleOutline} /></button>
                    )}
                </div>
            </div>
            <div className="activities">
            
                {visibleActivities.map((activity) => (
                <div key={activity.id} className="activity">
                    <span id="rate">{activity.rating}</span>
                    <img src={activity.url} alt={activity.title} />
                    <h3>{activity.title}</h3>
                    <span id="idadi">{activity.idadi} Activities</span>
                </div>
                ))}
            </div>
        </div>
        
        
    );

};

const Page2 = (ActivityData) => {
    return ( 
        <div >
            <Activities Data={ActivityData} />
        </div>
     );
}
 
export default Page2;