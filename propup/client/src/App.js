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
  switchNameHandler = (newName) => {
    console.log('did clickify')
    // this.state.persons[0].name = "what what" <-------------- THIS IS BAAAAAAAAAAAAAAAAAAAAAAAAAAD
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Max2', age: 282},
        {name: 'Max3', age: 283},
        {name: 'Max4', age: 500},
      ] 
    })
  }
nameChangedHandler = (event) => {
    this.setState ({
    persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 282},
      {name: 'Max3', age: 283},
      {name: 'Max4', age: 284},
    ]
  })}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

  return (

    
    <div className="App">
      <button
      style={style}
      onClick={() => this.switchNameHandler('testytesttester')}> Switch Name </button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
      click={this.switchNameHandler.bind(this, 'dude wheres my car')}
      changed={this.nameChangedHandler}> this is extra </Person>
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
    </div>
  );
}
}

export default App;
