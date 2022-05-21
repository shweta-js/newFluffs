
import React from 'react'
import Topics from '../components/Topics'
import "./Explore.css"
import Heading from "../components/Heading"

const Explore = () => {
    return (
        <div className="explore">
            <Heading data="Explore"/>
        {/* <h1 className="explore-h">Explore</h1> */}
       <Topics/>

        </div>
    )
}

export default Explore