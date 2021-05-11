/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import { Cardlist } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.components'
class App extends Component  {
constructor(){
  super()

  this.state = {
    monsters: [],
    searchField: ''
  };
}
handleChange(e) {
  this.setState({searchField: e.target.value})
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users}))
}



  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value})}
        />
        <Cardlist monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;