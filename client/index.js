import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="https://hihi-2022-melissa.au.auth0.com"
      clientId="6jm8J58Q0qXHXGUESqpC1pSEQxGH6obb"
      redirectUri={window.location.origin}
      audience="https://zimoto/api">
      <Provider store={store}>
        <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
