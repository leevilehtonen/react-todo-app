import React, { Component } from 'react';
import './css/App.css';

// Components
import Todos from './Todos';
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Todos/>
        </div>
      </div>
    );
  }
}

export default App;
