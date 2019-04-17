import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br></br>
            <label>
              SSN:
              <input type="text" name="ssn" />
            </label>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
