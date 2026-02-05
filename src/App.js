import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import ProjectContainer from './Components/ProjectContainer'
import ProjectDisplay from './Components/ProjectDisplay'
import AboutPage from './Components/AboutPage'
import ExhibitionsContainer from './Components/ExhibitionsContainer'
import MobileNav from './Components/MobileNav'
import Contact from './Components/Contact'
import ShopPage from './Components/ShopPage'
import SplashPage from './Components/SplashPage'
import ClassesContainer from './Components/ClassesContainer'
// import Media from './Components/Media'

import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  const toggleNav = () => {
    dispatch({ type: 'TOGGLE_NAV' })
  }

  return (
    <div className="App">
      <div className="site-content">
        <header>
          <NavBar toggleNav={toggleNav} />
          <MobileNav toggleNav={toggleNav} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/gallery" element={<ProjectContainer />} />
            <Route
              path="/project"
              element={<ProjectDisplay toggleNav={toggleNav} />}
            />
            <Route path="/classes" element={<ClassesContainer />} />
            <Route path="/exhibitions" element={<ExhibitionsContainer />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Media/> */}
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
