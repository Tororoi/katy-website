import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import ProjectContainer from './Components/ProjectContainer'
import ProjectDisplay from './Components/ProjectDisplay'
import AboutPage from './Components/AboutPage'
import ExhibitionsContainer from './Components/ExhibitionsContainer'
import MobileNav from './Components/MobileNav'
import Contact from './Components/Contact'
import ShopPage from './Components/ShopPage'
// import Media from './Components/Media'

import {connect} from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
          <div className="site-content">
            <header>
                <NavBar toggleNav={this.props.toggleNav}/>
                <MobileNav toggleNav={this.props.toggleNav}/>
            </header>
            <main>
              <Route path="/exhibitions" exact render={() =>
                <ExhibitionsContainer/>
              } />
              <Route path="/bio" exact render={() =>
                <AboutPage/>
              } />
              <Route path="/project" exact render={() =>
                <ProjectDisplay toggleNav={this.props.toggleNav}/>
              } />
              <Route path="/gallery" exact render={() =>
                <ProjectContainer/>
              } />
              <Route path="/shop" exact render={() =>
                <ShopPage/>
              } />
              <Route path="/contact" exact render={() =>
                <Contact/>
              } />
              <Route path="/" exact render={() =>
                <ProjectContainer/>
              } />
              {/* <Media/> */}

            </main>
          </div>
        </Router>
      </div>
    );
  }
}

let toggleNav = (boolean) => {
  return {
    type: "TOGGLE_NAV",
    payload: boolean
  }
}

let sendThisInformation = {
  toggleNav
}

export default withRouter(
  connect(null, sendThisInformation)(App)
);
