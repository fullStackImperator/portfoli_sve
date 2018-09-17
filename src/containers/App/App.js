import React, { Component } from 'react';
import { Background } from './App.style'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          Hi there
          {this.props.children}
      </div>
    );
  }
}

export default App;
