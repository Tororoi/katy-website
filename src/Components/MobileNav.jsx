import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import NavBar from './NavBar'

//Parents: NavBar

const MobileNav = (props) => {

    return(
        <>
        <div className="mob-cont" style={props.mobileNav ? {height: "250px"} : {height: "0px"}}>
            <ul className="mobilenav" style={props.mobileNav ? {display: "flex"} : {display: "flex"}}>
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
        </div>
        </>
    )
  };

  let mapStateToProps = (reduxState) => {
    return {
      mobileNav: reduxState.mobileNav
    }
  }

export default connect(mapStateToProps)(MobileNav)