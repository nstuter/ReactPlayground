import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import rollDice from"../logic/RollDice";
import DicePanel from "./DicePanel";
import MenuBar from "./MenuBar";
//import Tabs from './Tabs';
require('./styles.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { submission: '', text: '', value: 0 };
    this.handleClick = this.handleClick.bind(this);
    document.title = "Rykkata's Homepage";
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
        <MenuBar />
        <DicePanel />
        { /**  <Tabs>
            <div label = "Home">Sample text</div>
            <div label = "Dice Roller">
              <DicePanel clickHandler={this.handleClick} />
            </div>
          </Tabs> */}
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
