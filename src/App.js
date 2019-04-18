import React, { Component, useState } from 'react';
import './App.css';
import LabelledInput from './LabelledInput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <LabelledInput labelName="Cardholder Name" value="bob2"/>
            <br></br>
            <LabelledInput labelName="SSN"/>
            <br></br>
            <LabelledInput labelName="Merchant Name"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
