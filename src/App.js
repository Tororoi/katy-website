import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import ProjectContainer from './Components/ProjectContainer'
import ProjectDisplay from './Components/ProjectDisplay'
import Media from './Components/Media'

import {connect} from 'react-redux'

import {
  BrowserRouter as Router,
  Redirect,
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
              <NavBar/>
            </header>
            <main>
              <Route path="/project" exact render={() =>
                <ProjectDisplay/>
              } />
              <Route path="/gallery" exact render={() =>
                <ProjectContainer/>
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

let toggleNight = (boolean) => {
  return {
    type: "TOGGLE_NIGHT",
    payload: boolean
  }
}

let sendThisInformation = {
  toggleNight
}

export default withRouter(
  connect(null, sendThisInformation)(App)
);
