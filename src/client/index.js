import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles/main.scss';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
