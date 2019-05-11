import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import rollDice from"../logic/RollDice";
import DicePanel from "./DicePanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { submission: '', text: '', value: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = diceName => {
    this.setState(rollDice(this.state, diceName));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <DicePanel clickHandler={this.handleClick} />
        </body>
      </div>
    );
  }

  handleChange(e) {
    const newRequest = {
      text: '',
      id: Date.now()
    };
    this.setState({ submission: newRequest, text: e.target.value });
  }
}

export default App;
