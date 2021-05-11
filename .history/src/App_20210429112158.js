/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';

import { Cardlist } from './components/card-list/card-list.component'

class  App extends React.Component() {
constructor(){
  super()

  this.state = {
    monsters: []
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users');
}



  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

export default App;
