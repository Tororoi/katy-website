import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Parents: App

const NavBar = (props) => {
  const mobileNav = useSelector((state) => state.mobileNav)
  const fullImage = useSelector((state) => state.fullImage)

  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <div
      className={`sticky top-0 z-50 bg-white shadow-sm ${fullImage ? 'hidden' : 'flex'} items-center justify-between px-6 py-4 lg:px-12`}
    >
      <NavLink
        className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 hover:text-sage-green transition-colors duration-300"
        to="/"
      >
        Katy Wang
      </NavLink>

      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <NavLink
            className={({ isActive }) =>
              `text-sm lg:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive
                  ? 'text-forest-green'
                  : 'text-gray-600 hover:text-sage-green'
              }`
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `text-sm lg:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive
                  ? 'text-forest-green'
                  : 'text-gray-600 hover:text-sage-green'
              }`
            }
            to="/classes"
          >
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `text-sm lg:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive
                  ? 'text-forest-green'
                  : 'text-gray-600 hover:text-sage-green'
              }`
            }
            to="/exhibitions"
          >
            Exhibitions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `text-sm lg:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive
                  ? 'text-forest-green'
                  : 'text-gray-600 hover:text-sage-green'
              }`
            }
            to="/bio"
          >
            Bio
          </NavLink>
        </li>
        <li>
          <a
            className="text-sm lg:text-base font-medium uppercase tracking-wider text-gray-600 hover:text-sage-green transition-colors duration-300"
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
              `text-sm lg:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive
                  ? 'text-forest-green'
                  : 'text-gray-600 hover:text-sage-green'
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="md:hidden cursor-pointer p-2" onClick={displayMobileNav}>
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 bg-gray-900 transition-all duration-300 ${
              mobileNav ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-900 transition-all duration-300 ${
              mobileNav ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-900 transition-all duration-300 ${
              mobileNav ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
