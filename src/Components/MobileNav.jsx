import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

// import NavBar from './NavBar'

//Parents: NavBar

const MobileNav = (props) => {
  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <>
      <div
        className="mob-cont"
        style={
          props.mobileNav
            ? { height: "350px", transition: "height 0.3s" }
            : { height: "0px", transition: "height 0s" }
        }
      >
        <ul
          className="mobilenav"
          style={
            props.mobileNav ? { marginTop: "0px" } : { marginTop: "300px" }
          }
          onClick={displayMobileNav}
        >
          <li>
            <NavLink className="navlink" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/exhibitions">
              Exhibitions
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/bio">
              Bio
            </NavLink>
          </li>
          <li>
            <a
              className="navlink"
              href="https://www.etsy.com/shop/MushroomKaty?ref=shop_sugg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </li>
          <li>
            <NavLink className="navlink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

let mapStateToProps = (reduxState) => {
  return {
    mobileNav: reduxState.mobileNav,
  }
}

export default connect(mapStateToProps)(MobileNav)
