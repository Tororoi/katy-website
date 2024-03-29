import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

//Parents: App

const NavBar = (props) => {
  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <div
      className="nav-cont"
      style={props.fullImage ? { display: "none" } : { display: "flex" }}
    >
      <NavLink className="artist" to="/">
        <div>Yuan Yuan Wang</div>
        <div className="nickname">'Katy'</div>
      </NavLink>
      <ul className="nav">
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
      <div className="hamburger-click-area" onClick={displayMobileNav}>
        <div className="hamburger">
          <i
            id="top-bun"
            style={
              props.mobileNav
                ? { transform: "matrix(1, -1, 1, 1, 0, 7)" }
                : { transform: "rotate(0deg)" }
            }
          ></i>
          <i
            id="patty"
            style={
              props.mobileNav
                ? { width: "0px", marginLeft: "12px" }
                : { width: "24px", marginLeft: "0px" }
            }
          ></i>
          <i
            id="bottom-bun"
            style={
              props.mobileNav
                ? { transform: "matrix(1, 1, -1, 1, 0, -7)" }
                : { transform: "rotate(0deg)" }
            }
          ></i>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = (reduxState) => {
  return {
    mobileNav: reduxState.mobileNav,
    fullImage: reduxState.fullImage,
  }
}

export default connect(mapStateToProps)(NavBar)
