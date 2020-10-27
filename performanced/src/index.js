import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { AlertState } from './context/alert/AlertState';

const application = (
  <AlertState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AlertState>
)

ReactDOM.render(
  application,
  document.getElementById('root')
);

serviceWorker.unregister();
