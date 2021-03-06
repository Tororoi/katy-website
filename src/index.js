import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data'

// redux dependencies
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// routing dependencies
import {BrowserRouter} from 'react-router-dom'

//Initial State
let initialState = {
  // Change the key-value pairs here
  mobileNav: false,
  projects: [...data.artwork],
  project: data.artwork[0],
  exhibitions: [...data.exhibitions],
  residencies: [...data.residencies],
  contact: {name: '', email: '', subject: '', message: ''},
  fullImage: false
}

// if an action gets dispatched, that action will be ran through all of the reducers
let theReducer = (state = initialState, action) => {

  switch (action.type) {

    case "TOGGLE_NAV":

      return {
        ...state,
        mobileNav: !state.mobileNav
      }

    case "CHOOSE_PROJECT":

      return {
        ...state,
        project: action.payload
      }
    
    case "PREV_NEXT":
      let projIndex = state.project.id
      const dir = action.payload;
      dir === "◀" ? projIndex -= 1 : projIndex += 1
      if (projIndex < 0) {projIndex = 9;} else if (state.projects[projIndex] === undefined) {projIndex = 0;}

      return {
        ...state,
        project: state.projects[projIndex]
      }
    case "UPDATE_CONTACT":
      let name = action.payload.name;
      let value = action.payload.value;
      return {
        ...state,
        contact: {
          ...state.contact,
          [name]: value
        }
      }
    case "DISPLAY_FULL_IMAGE":
      let newState = !state.fullImage;
      let color = "black";
      newState ? color = "black" : color = "white";
      document.body.style.backgroundColor = color;
      return {
        ...state,
        fullImage: newState
      }
    default:
      return state
  }

}

let storeObject = createStore(theReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeObject}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);