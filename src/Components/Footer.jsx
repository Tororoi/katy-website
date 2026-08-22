import React from 'react'
import { Link } from 'react-router-dom'

//Parents: App

const Footer = () => {
  return (
    <footer className="border-t border-hairline px-5 py-6 md:px-14 md:py-[26px] flex flex-col md:flex-row items-center md:items-baseline justify-between gap-3 md:gap-6 text-sm text-muted text-center md:text-left">
      <Link to="/" className="text-base font-medium text-ink">
        Katy Wang
      </Link>
      <div className="flex flex-wrap items-baseline justify-center gap-x-[26px] gap-y-1.5">
        <Link to="/exhibitions">Exhibitions &amp; Projects</Link>
        <a
          href="https://www.instagram.com/katywangstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="mailto:katywangwebsite@gmail.com">katywangwebsite@gmail.com</a>
      </div>
      <div>© {new Date().getFullYear()} Katy Wang</div>
    </footer>
  )
}

export default Footer
