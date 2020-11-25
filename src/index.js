import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/desktop.css';
import './stylesheets/mobilentablet.css';
import './stylesheets/tablet.css';
import './stylesheets/mobile.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

