import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import { setCardHolderName, setSsn, setMerchantname } from './actions/actions.js';
import { store } from './store/index.js'

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

  // setCardHolderName = (cardholderName) => {
  //   this.setState({cardHolderName: cardholderName});
  // }

  // setSsn = (ssn) => {
  //   this.setState({ssn: ssn});
  // }

  // setMerchantname = (merchantName) => {
  //   this.setState({merchantName: merchantName});
  // }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <form>
            <label>
              Cardholder Name:
              <input onChange={event => this.props.setCardHolderName(event.target.value)} type="text" id="cardHolderName"/>
            </label>
            <br></br>
            <label>
              SSN:
              <input onChange={event => this.props.setSsn(event.target.value)} type="text" id="ssn"/>
            <br></br>
            </label>
            <label>
              Merchant Name:
              <input onChange={event => this.props.setMerchantname(event.target.value)} type="text" id="merchantName"/>
            </label>
            <br></br>
            <button onClick={() => this.handleSubmit()} type="submit" id="submitButton">Submit</button>
          </form>
        </header>
      </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardHolderName: state.cardHolderName,
    ssn: state.ssn,
    merchantName: state.merchantName
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCardHolderName, setSsn, setMerchantname }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
