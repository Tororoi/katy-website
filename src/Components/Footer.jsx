import React from 'react'
import { Link } from 'react-router-dom'

//Parents: App

const Footer = () => {
  return (
    <footer className="border-t border-hairline px-5 py-6 md:px-14 md:py-[26px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 text-[13px] text-[#8a897d] text-center md:text-left">
      <Link
        to="/"
        className="font-serif text-[17px] font-semibold text-forest-green"
      >
        Katy Wang
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
        <Link
          to="/exhibitions"
          className="hover:text-forest-green transition-colors duration-200"
        >
          Exhibitions &amp; Projects
        </Link>
        <a
          href="https://www.instagram.com/katywangstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-forest-green transition-colors duration-200"
        >
          Instagram
        </a>
        <a
          href="mailto:katywangwebsite@gmail.com"
          className="hover:text-forest-green transition-colors duration-200"
        >
          katywangwebsite@gmail.com
        </a>
      </div>
      <div>© {new Date().getFullYear()} Katy Wang</div>
    </footer>
  )
}

export default Footer
