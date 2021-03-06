/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import { Cardlist } from './components/card-list/card-list.component'

class App extends Component  {
constructor(){
  super()

  this.state = {
    monsters: []
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users}))
}



  render() {
    return (
      <div className="App">
        <input type="password"/>
        <Cardlist monsters={this.state.monsters}/>
      </div>
    )
  }
}

export default App;
