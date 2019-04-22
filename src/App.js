import React, { Component } from 'react';
import './App.css';

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
  }

  handleSubmit(event) {
    this.setState({name1: null});
  }

  getState() {
    return this.state
  }

  setName = (a) => {
    this.setState({name1: a})
  }

  setCardHolderName = (cardholderName) => {
    this.setState({cardHolderName: cardholderName});
  }

  setSsn = (ssn) => {
    this.setState({ssn: ssn});
  }

  setMerchantname = (merchantName) => {
    this.setState({merchantName: merchantName});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>
              Cardholder Name:
              <input onChange={event => this.setCardHolderName(event.target.value)} type="text" id="cardHolderName"/>
            </label>
            <br></br>
            <label>
              SSN:
              <input onChange={event => this.setSsn(event.target.value)} type="text" id="ssn"/>
            <br></br>
            </label>
            <label>
              Merchant Name:
              <input onChange={event => this.setMerchantname(event.target.value)} type="text" id="merchantName"/>
            </label>
            <br></br>
            <button onClick={() => this.handleSubmit()} type="submit" id="submitButton">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
