import React, { Component, useState } from 'react';
import { FaAdd,FaInfo,FaHome,FaPhone,FaPlus} from "react-icons/fa";
import {Link} from 'react-router-dom'
import './Header.css'

function UserHeader(props) {
    const [isMobile,setIsMobile]=useState('false')
    return ( 
        <nav className='navbar'>
            <h3 className='logo'>BUGZILLAH</h3>
            <ul className={!isMobile?'nav-links-mobile':'nav-links'} >
                <Link to='/qa' className='home'>
                    <li onClick={()=>{if(!isMobile){setIsMobile(!isMobile)}}}> Home</li>
                </Link>
                <Link to='/main/aboutus' className='home'>
                    <li onClick={()=>{if(!isMobile){setIsMobile(!isMobile)}}}>About</li>
                </Link>
                <Link to='/main/contactus' className='home'>
                    <li onClick={()=>{if(!isMobile){setIsMobile(!isMobile)}}}>Contact</li>
                </Link>
                <Link to='/' className='home' onClick={()=>{localStorage.clear()}}>
                    <li onClick={()=>{if(!isMobile){setIsMobile(!isMobile)}}}>LogOut</li>
                </Link>

            </ul>
            <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
                {!isMobile ? <i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}
            </button>
        </nav>
     );
}

export default UserHeader;