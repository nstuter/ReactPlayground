import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { submission: '', text: '', value: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tabChange = this.tabChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Tabs value={this.state.value} onChange={this.tabChange}>
            <Tab label="Ryk's Movie Night" />
            <Tab label="Brigie's Anime" />
          </Tabs>
        </header>
        <body>
          <h3 className="Header">
            {this.state.value === 0 && <div>Submit a new movie request</div>}
            {this.state.value === 1 && <div>Submit a new anime request</div>}
          </h3>
          <div>
            <FormControl type='text'>
              <InputLabel htmlFor='new-movie'>
                 {this.state.value === 0 && <div>Movie Name</div>}
                 {this.state.value === 1 && <div>Anime Name</div>} 
              </InputLabel>
              <Input
                id='new-movie'
                onChange={this.handleChange}
                value={this.state.text}/>
            </FormControl>
          </div>
          <div className='Submission'>
            <Button onClick={this.handleSubmit} variant="contained" color="primary">Submit</Button>
          </div>
          <div>
            <TextField readonly value={this.state.submission.text} />
          </div>
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

  tabChange(event, value) {
    const newRequest = {
      text: '',
      id: Date.now()
    };
    this.setState({ submission: newRequest, text: '', value: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text)
    {
      return;
    }
    if (!this.state.text.length) {
      return;
    }
    const newRequest = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state=> ({
      submission: newRequest, 
      text: ''
    }));
  }
}

export default App;
