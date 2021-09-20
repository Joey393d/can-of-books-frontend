import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-txxoephp.us.auth0.com"
    clientId="YnQ55inNLqxYMUkyD2ZhUFGZH9eRfgzS"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
</React.StrictMode>,
  document.getElementById("root")
);