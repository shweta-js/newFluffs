import React from 'react'
import "./Profile.css"
import story1 from "../assets/bgwn1.jpeg"
import story2 from "../assets/user1.jpg"
import Heading from "../components/Heading"
const Profile = () => {
    return (
        <>
       <Heading data="Profile"/>
        <div className="profile">
            <div className="dp">
            <div  className="bg-dp">
            <img src={story1} />
            </div>
            <img className="sm-dp" src={story2} />
            </div>
            <div className="name-dtl">
            <h4 className="Name">Ann Morgan</h4>
            <h6 className="usr_name">@annmorgan</h6>
            <p className="about">
            Welcome to the offical account of Anna Morgan. 
            Success is in the PIXELS, #pixels
            </p>
            
            </div>
            <div className="follower-dtl">
            <p className="no_posts">posts</p><span>60</span>
            <p className="followers">followers</p><span>1k</span>
            <p className="following">following</p><span>10</span>

            </div>

        </div>
        </>
    )
}

export default Profile
