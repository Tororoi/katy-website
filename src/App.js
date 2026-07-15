import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import MobileNav from './Components/MobileNav'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import GalleryPage from './Components/GalleryPage'
import ClassesContainer from './Components/ClassesContainer'
import AboutPage from './Components/AboutPage'
import ExhibitionsContainer from './Components/ExhibitionsContainer'
import Contact from './Components/Contact'

import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  const toggleNav = () => {
    dispatch({ type: 'TOGGLE_NAV' })
  }

  return (
    <div className="App min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white">
        <NavBar toggleNav={toggleNav} />
        <MobileNav toggleNav={toggleNav} />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/classes" element={<ClassesContainer />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/exhibitions" element={<ExhibitionsContainer />} />
          <Route path="/contact" element={<Contact />} />
          {/* Old routes cut in the redesign */}
          <Route path="/project" element={<Navigate to="/gallery" replace />} />
          <Route path="/shop" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
