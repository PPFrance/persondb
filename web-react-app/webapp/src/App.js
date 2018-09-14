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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Some more blah... and then...
          <PersonForm id="person-form" />
          There should have been a form there.
        </p>
        <TextField id="select-currency-native" select label="select" helperText="Please select your currency"
         margin="normal" />
      </div>
    );
  }
}


 


export default App;


