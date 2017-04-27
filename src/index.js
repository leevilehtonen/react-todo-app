import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './Firebase';

import 'bootstrap/dist/css/bootstrap.css';
import './css/CustomBootstrap.css';
import './css/index.css';

var database = firebase.database();


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
