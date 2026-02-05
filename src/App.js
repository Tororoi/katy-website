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
// import Media from './Components/Media'

import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

const toggleNav = (boolean) => {
  return {
    type: 'TOGGLE_NAV',
    payload: boolean,
  }
}

const sendThisInformation = {
  toggleNav,
}

const AppContent = ({ toggleNav }) => {
  return (
    <div className="App">
      <div className="site-content">
        <header>
          <NavBar toggleNav={toggleNav} />
          <MobileNav toggleNav={toggleNav} />
        </header>
        <main>
          <Routes>
            <Route path="/exhibitions" element={<ExhibitionsContainer />} />
            <Route path="/bio" element={<AboutPage />} />
            <Route
              path="/project"
              element={<ProjectDisplay toggleNav={toggleNav} />}
            />
            <Route path="/gallery" element={<ProjectContainer />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<ProjectContainer />} />
            {/* <Media/> */}
          </Routes>
        </main>
      </div>
    </div>
  )
}

const App = ({ toggleNav }) => {
  return <AppContent toggleNav={toggleNav} />
}

export default connect(null, sendThisInformation)(App)
