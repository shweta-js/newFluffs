// import React from 'react'
// import "./Topics.css"
// import moments from '../assets/moments.jpg';

// const Topics = () => {
//     return (
//         <div className="topics">
//             <img src={moments} alt="post"/>
//             <p>Moments</p>
            
//         </div>
//     )
// }

// export default Topics


// import React from 'react'
// import "./Topics.css"
// import moments from '../assets/moments.jpg';

// const images=["moments","poilitcs"];

// const Topics = () => {
//     return (
//     <div className="test">
//     {
//         images.map(imgs=><p >{imgs}</p>)
//     }
//     </div>
//     )
// };

// export default Topics
import React from 'react'
import "./Topics.css"
import moments from '../assets/moments.jpg';
import comedy from "../assets/comedy.jpg"
import womanly from "../assets/womanly.jpeg"
import manly from "../assets/menly.jpeg"
import movies from "../assets/movie.jpeg"
import music from "../assets/music.jpg"
import celebs from "../assets/celebs.jpg"
import politics from "../assets/politics.jpeg"
import sports from "../assets/sports.jpeg"
import tech from "../assets/tech.jpg"
import business from "../assets/business.jpg"
import games from "../assets/games.jpg"
const images=[
    moments,
    comedy,
    womanly,
    manly,
    movies,
    music,
    celebs,
    politics,
    sports,
    tech,
    business,
    games];
 
const Topics = () => {
    return (
    <div className="topics">
    {
        images.map(
            imgs=>
            <>
            <img src={imgs} alt="topics"/>
            </>
        )
    }
    </div>
    )
};

export default Topics
