import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import logo from './logo.svg';
import './App.css';

import PersonForm from './personform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PersonApp</h1>
        </header>
        
        <PersonForm id="person-form" />
        
      </div>
    );
  }
}


 


export default App;


