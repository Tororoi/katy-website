import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

//Parents: App

const NavBar = (props) => {

    const displayMobileNav = (e) => {
        props.toggleNav()
    }

    return(
        <div className="nav-cont">
            <NavLink className="artist" to="/">
                <div>Yuan Yuan Wang</div>
                <div className="nickname">'Katy'</div>
            </NavLink>
            <ul className="nav">
                <li>
                <NavLink className="navlink" to="/gallery">Gallery</NavLink>
                </li>
                <li>
                <NavLink className="navlink" to="/exhibitions">Exhibitions</NavLink>
                </li>
                <li>
                <NavLink className="navlink" to="/bio">Bio</NavLink>
                </li>
                <li>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div class="hamburger-click-area" onClick={displayMobileNav}>    
                <div class="hamburger">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        </div>
    )
  };

export default connect()(NavBar)