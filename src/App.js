import React, { Component, useState } from 'react';
import './App.css';
import LabelledInput from './LabelledInput.js';

class App extends Component {
  constructor(props){
    super(props);
    this.input = React.createRef();
    this.state = {
      name1: "",
      cardHolderName: "",
      ssn: "",
      merchantName: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault();
    // event.target.form.reset();
    console.log('We are here');
    this.setState({name1: null});
  }

  getState() {
    return this.state
  }

  setName = (a) => {
    console.log('We are here');
    this.setState({name1: a})
    console.log('====>' + a);
  }

  setCardHolderName = (cardholderName) => {
    this.setState({cardHolderName: cardholderName});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>
            <label>
              Cardholder Name:
              <input onChange={event => this.setCardHolderName(event.target.value)} type="text"/>
            </label>
            <br></br>
            <label>
              SSN:
              <input onChange={event => this.setName(event.target.value)} type="text"/>
            <br></br>
            </label>
            <label>
              Merchant Name:
              <input onChange={event => this.setName(event.target.value)} type="text"/>
            </label>
            <br></br>
            <button onClick={this.handleSubmit} type="submit" id="blah"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
