import React from 'react'
import { render, screen } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

const initialState = {
  mobileNav: false,
  contact: { name: '', email: '', message: '' },
}

const renderApp = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={createStore((state = initialState) => state)}>
        <App />
      </Provider>
    </MemoryRouter>,
  )

test('renders the wordmark and home hero', () => {
  renderApp('/')
  expect(screen.getAllByText(/Katy Wang/i).length).toBeGreaterThan(0)
  expect(screen.getByText(/Selected work/i)).toBeInTheDocument()
})

test('renders the classes page with venue filter', () => {
  renderApp('/classes')
  expect(screen.getByText(/All venues/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Register at/i).length).toBeGreaterThan(0)
})
