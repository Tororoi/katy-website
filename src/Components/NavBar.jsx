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
      className={`w-full bg-paper flex items-center md:items-baseline justify-between px-5 py-4 md:px-14 md:py-6 ${
        pathname === '/' ? '' : 'border-b border-hairline'
      }`}
    >
      <Link
        to="/"
        className="text-[21px] md:text-[25px] font-medium tracking-[.01em] text-ink leading-none"
      >
        Katy Wang
      </Link>

      <div className="hidden md:flex items-baseline gap-8 text-[15.5px] text-ink">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-[6px] decoration-1'
                : ''
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
