import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Parents: App

const NavBar = (props) => {
  const dispatch = useDispatch()
  const mobileNav = useSelector((state) => state.mobileNav)
  const fullImage = useSelector((state) => state.fullImage)

  const displayMobileNav = (e) => {
    props.toggleNav()
  }

  return (
    <nav
      className={`w-full sticky top-0 z-50 bg-white shadow-sm ${fullImage ? 'hidden' : 'flex'} items-center justify-between px-6 py-2 lg:px-12`}
    >
      {/* Artist Name - Left Side, Large and Prominent */}
      <Link to="/" className="flex-1 text-left flex items-center">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest-green hover:text-sage-green transition-colors duration-200 leading-none -mt-1">
          Katy Wang
        </h1>
      </Link>

      {/* Navigation Links - Right Side, Hidden on Mobile */}
      <div className="hidden md:flex items-center gap-8 ml-8">
        <Link
          to="/gallery"
          className="text-sm font-medium text-gray-700 hover:text-forest-green transition-colors duration-200"
        >
          Gallery
        </Link>
        <Link
          to="/classes"
          className="text-sm font-medium text-gray-700 hover:text-forest-green transition-colors duration-200"
        >
          Classes
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium text-gray-700 hover:text-forest-green transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/exhibitions"
          className="text-sm font-medium text-gray-700 hover:text-forest-green transition-colors duration-200"
        >
          Exhibitions
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium text-gray-700 hover:text-forest-green transition-colors duration-200"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
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
    </nav>
  )
}

export default NavBar
