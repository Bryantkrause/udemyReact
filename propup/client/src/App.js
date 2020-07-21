import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 123, name: 'Max', age: 28},
      {id: 1234,name: 'Max2', age: 282},
      {id: 12345,name: 'Max3', age: 283},
    ],
    otherState: 'some other value',
    showPersons: false
  }
  // switchNameHandler = (newName) => {
  //   console.log('did clickify')
  //   // this.state.persons[0].name = "what what" <-------------- THIS IS BAAAAAAAAAAAAAAAAAAAAAAAAAAD
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Max2', age: 282},
  //       {name: 'Max3', age: 283},
  //     ] 
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons.slice()]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

nameChangedHandler = (event) => {
    this.setState ({
    persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 282},
      {name: 'Max3', age: 283},
    ]
  })}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons
this.setState({showPersons: !doesShow}) 
}


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

let persons = null;
if (this.state.showPersons) {
  persons = (       
  <div>
    {this.state.persons.map((person, index) => {
      return <Person 
      click={() => this.deletePersonHandler(index)}      
      name={person.name}
      age={person.age}
      key={person.id} />
    })}
    </div>
    )
}

return (
  <div className="App">
    <h1>Hi, I'm a React App</h1>
    <p>This is really working!</p>
    <button
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
    {persons}
  </div>
);
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}
}

export default App;
