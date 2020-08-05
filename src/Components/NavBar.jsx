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
                    <i id="top-bun" style={props.mobileNav ? {transform: "matrix(1, -1, 1, 1, 0, 7)"} : {transform: "rotate(0deg)"}} onClick={displayMobileNav}></i>
                    <i id="patty" style={props.mobileNav ? {width: "0px", marginLeft: "12px"} : {width: "24px", marginLeft: "0px"}} onClick={displayMobileNav}></i>
                    <i id="bottom-bun" style={props.mobileNav ? {transform: "matrix(1, 1, -1, 1, 0, -7)"} : {transform: "rotate(0deg)"}} onClick={displayMobileNav}></i>
                </div>
            </div>
        </div>
    )
  };

  let mapStateToProps = (reduxState) => {
    return {
      mobileNav: reduxState.mobileNav
    }
  }

export default connect(mapStateToProps)(NavBar)