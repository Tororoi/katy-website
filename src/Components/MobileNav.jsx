import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Parents: App

const links = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/classes', label: 'Classes' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const MobileNav = (props) => {
  const mobileNav = useSelector((state) => state.mobileNav)

  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <div
      className={`md:hidden absolute top-full left-0 right-0 bg-paper border-b border-hairline shadow-lg overflow-hidden transition-all duration-300 z-40 ${
        mobileNav ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <ul
        className={`flex flex-col transition-all duration-300 ${
          mobileNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onClick={displayMobileNav}
      >
        {links.map((link, i) => (
          <li key={link.to} className={i > 0 ? 'border-t border-hairline' : ''}>
            <NavLink
              className={({ isActive }) =>
                `block px-5 py-3.5 text-[16px] text-ink transition-colors duration-200 ${
                  isActive
                    ? 'underline underline-offset-[6px] decoration-1'
                    : ''
                }`
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
