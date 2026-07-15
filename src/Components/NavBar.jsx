import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Parents: App

const navLinks = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/classes', label: 'Classes' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const NavBar = (props) => {
  const mobileNav = useSelector((state) => state.mobileNav)
  const { pathname } = useLocation()

  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <nav
      className={`w-full bg-white flex items-center justify-between px-5 py-4 md:px-14 md:py-[22px] ${
        pathname === '/' ? '' : 'border-b border-hairline'
      }`}
    >
      <Link
        to="/"
        className="font-serif text-[21px] md:text-[26px] font-semibold text-forest-green leading-none"
      >
        Katy Wang
      </Link>

      <div className="hidden md:flex items-center gap-[34px] text-sm font-medium text-[#44443c]">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `pb-[3px] border-b-2 transition-colors duration-200 hover:text-forest-green ${
                isActive
                  ? 'text-forest-green border-forest-green'
                  : 'border-transparent'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={mobileNav ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileNav}
        className="md:hidden cursor-pointer p-3 -m-1.5"
        onClick={displayMobileNav}
      >
        <span
          className={`block w-[22px] h-[1.5px] bg-ink transition-transform duration-300 ${
            mobileNav ? 'rotate-45 translate-y-[3.25px]' : ''
          }`}
        ></span>
        <span
          className={`block w-[22px] h-[1.5px] bg-ink mt-[5px] transition-transform duration-300 ${
            mobileNav ? '-rotate-45 -translate-y-[3.25px]' : ''
          }`}
        ></span>
      </button>
    </nav>
  )
}

export default NavBar
