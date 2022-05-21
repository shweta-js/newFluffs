import React from 'react'
import Stories from '../components/Stories'
import Posts from "../components/Posts.js"
import Sugestions from '../components/Sugestions'
import "./Home.css"
const Home = () => {
    return (
        <div>
           <div className="home">
            <Stories/>
            <div className="posts_n_sugestion">
            <Posts/>
            <Sugestions/>
            </div>
           
            </div>    
        </div>
    )
}

export default Home

