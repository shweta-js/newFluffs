import React from 'react';
import "./ExploreCard.css";
import exp_img from "../assets/tp1.jpg";

const ExploreCard = () => {
    return (
        <div className="exploreCard">
            <img src={exp_img} alt="explore section's img"/>
        </div>
    )
}

export default ExploreCard