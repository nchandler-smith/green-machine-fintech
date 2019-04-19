import React, { Component, useState } from 'react';
import './App.css';
import LabelledInput from './LabelledInput.js';

class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.form.reset();
  }

  setName() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Cardholder Name:
              <input onChange={event => this.setName(event.target.value)} type="text"/>
            </label>
            {/*<LabelledInput labelName="Cardholder Name"/>*/}
            <br></br>
            <label>
              SSN:
              <input onChange={event => this.setName(event.target.value)} type="text"/>
            </label>
            {/*<LabelledInput labelName="SSN"/>*/}
            <label>
              Merchant Name:
              <input onChange={event => this.setName(event.target.value)} type="text"/>
            </label>
            <br></br>
            {/*<LabelledInput labelName="Merchant Name"/>*/}
            <input id="blah" type="submit" value="Submit"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
