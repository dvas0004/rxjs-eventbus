import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {Subject} from 'rxjs/Subject';
import './App.css';

class App extends Component {

  static eventbus = null;

  constructor(props){
    super(props);
    if (!window.jsplumb_demo.eventbus){
      window.jsplumb_demo.eventbus = new Subject();
    }
    this.eventbus = window.jsplumb_demo.eventbus;
  }

  handleButtonClick = () => {
    this.eventbus.next('new-button');
  }

  render() {
    return (
      <div className="App">
        <h3>React Lives Here!</h3>
        <Button color="primary" variant="contained" onClick={this.handleButtonClick}>Add new node</Button>
      </div>
    );
  }
}

export default App;
