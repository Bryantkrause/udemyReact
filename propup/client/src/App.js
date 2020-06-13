import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Max2', age: 282},
      {name: 'Max3', age: 283},
      {name: 'Max4', age: 284},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.lot('testing password thing type thing')
    console.log('did clickify')
    // this.state.persons[0].name = "what what" <-------------- THIS IS BAAAAAAAAAAAAAAAAAAAAAAAAAAD
    this.setState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Max2', age: 282},
        {name: 'Max3', age: 283},
        {name: 'Max4', age: 500},
      ] 
    })
  }

  render() {
  return (
    <div className="App">
      <button onClick={this.switchNameHandler}> Switch Name </button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> this is extra </Person>
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
    </div>
  );
}
}

export default App;
