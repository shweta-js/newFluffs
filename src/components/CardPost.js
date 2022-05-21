import React from 'react'
import exp1 from "../assets/1.jpg";
import person from "../assets/user1.jpg";
import "./CardPost.css";
const CardPost = () => {
    return (
        <div className="cardpost">
            <img src={exp1} className="cardpost-img" alt="some image"/>
            <div className="cardpost-info">
                <img src={person} alt="some person pic"/>
                <p className="cardpost-name">Shweta</p>
                <p className="cardpost-usr-name">@schvetha</p>
            </div>
            <button className="follow-btn">follow</button>
            </div>
    )
}

export default CardPost