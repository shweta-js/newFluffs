import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPaw,faBell,faSearch,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import ppost from '../assets/3.jpg';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const gotoProfile=()=>{
        navigate('/profile');
    }
    return (
    
        <div className="navbar">
            <div className="fluffs">
            <FontAwesomeIcon className="paw" icon={faPaw}/>
             <p>Fluffs</p>
            </div>
            <div className="navbar-right-contents">
            
                <div className="inputElements">
                    <input type="text" className="" placeholder="search"/> 
                    <FontAwesomeIcon className="" icon={faSearch}/>
                </div>
                <FontAwesomeIcon  className="icons" icon={faBell}/>
                <FontAwesomeIcon  className="icons" icon={faEnvelope}/>
                <div className="person">
                <img src={ppost} 
                className="person-img" 
                alt="post"
                onClick={gotoProfile}
                />
                <p className="">Monica Geller</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
