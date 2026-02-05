import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import NavBar from './NavBar'

//Parents: NavBar

const MobileNav = (props) => {
  const mobileNav = useSelector((state) => state.mobileNav)

  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <>
      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 z-40 ${
          mobileNav ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul
          className={`flex flex-col transition-all duration-300 ${
            mobileNav
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
          onClick={displayMobileNav}
        >
          <li className="border-b border-gray-200">
            <NavLink
              className={({ isActive }) =>
                `block px-6 py-4 text-base font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-forest-green bg-cream'
                    : 'text-gray-700 hover:bg-cream hover:text-sage-green'
                }`
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="border-b border-gray-200">
            <NavLink
              className={({ isActive }) =>
                `block px-6 py-4 text-base font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-forest-green bg-cream'
                    : 'text-gray-700 hover:bg-cream hover:text-sage-green'
                }`
              }
              to="/classes"
            >
              Classes
            </NavLink>
          </li>
          <li className="border-b border-gray-200">
            <NavLink
              className={({ isActive }) =>
                `block px-6 py-4 text-base font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-forest-green bg-cream'
                    : 'text-gray-700 hover:bg-cream hover:text-sage-green'
                }`
              }
              to="/exhibitions"
            >
              Exhibitions
            </NavLink>
          </li>
          <li className="border-b border-gray-200">
            <NavLink
              className={({ isActive }) =>
                `block px-6 py-4 text-base font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-forest-green bg-cream'
                    : 'text-gray-700 hover:bg-cream hover:text-sage-green'
                }`
              }
              to="/bio"
            >
              Bio
            </NavLink>
          </li>
          <li className="border-b border-gray-200">
            <a
              className="block px-6 py-4 text-base font-medium uppercase tracking-wider text-gray-700 hover:bg-cream hover:text-sage-green transition-colors duration-200"
              href="https://www.etsy.com/shop/MushroomKaty?ref=shop_sugg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block px-6 py-4 text-base font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-forest-green bg-cream'
                    : 'text-gray-700 hover:bg-cream hover:text-sage-green'
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileNav
