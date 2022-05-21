import React from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
           <NavLink to="/"> <h3 className="nav-h3">Home</h3></NavLink>
            <NavLink to="/explore"><h3 className='nav-h3'>Explore</h3></NavLink>
            <NavLink to="/stories"><h3 className='nav-h3'>Stories</h3></NavLink>
            <NavLink to="/upload"> <h3 className='nav-h3'>Upload</h3></NavLink>
            <NavLink to="/profile"><h3 className='nav-h3'>Profile</h3></NavLink>
           <NavLink to="/settings"><h3 className='nav-h3'>Settings</h3></NavLink>
        </div>
    )
}

export default Sidebar
