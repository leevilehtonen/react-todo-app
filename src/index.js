import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.css';
import './css/CustomBootstrap.css';
import './css/index.css';


var config = {
  apiKey: "AIzaSyAPCNJmJnC166l_jC9lrKAS1sBDg-tsHUI",
  authDomain: "react-todo-app-183fd.firebaseapp.com",
  databaseURL: "https://react-todo-app-183fd.firebaseio.com",
  projectId: "react-todo-app-183fd",
  storageBucket: "react-todo-app-183fd.appspot.com",
  messagingSenderId: "142998327441"
}
firebase.initializeApp(config);

var database = firebase.database();


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
