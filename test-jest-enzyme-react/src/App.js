import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { throwStatement } from '@babel/types';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.calculate = this.calculate.bind(this);
  }

  calculate(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){


      return (
        <div data-test="component-app">
          <h1 data-test="counter-display">{this.state.counter}</h1>
          <button data-test="increment-button" onClick={this.calculate} >Increment counter</button>
        </div>
    );
  }
}

export default App;
