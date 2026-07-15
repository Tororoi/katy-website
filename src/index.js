import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// redux dependencies
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// routing dependencies
import { BrowserRouter } from 'react-router-dom'

//Initial State
let initialState = {
  mobileNav: false,
  contact: { name: '', email: '', message: '' },
}

let theReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        ...state,
        mobileNav: !state.mobileNav,
      }
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.payload.name]: action.payload.value,
        },
      }
    default:
      return state
  }
}

let storeObject = createStore(
  theReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={storeObject}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
