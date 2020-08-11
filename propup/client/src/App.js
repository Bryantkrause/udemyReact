import React, { Component } from 'react';

import styled from 'styled-components'
import './App.css';
import Person from './Person/Person'

// import Radium, {StyleRoot} from 'radium'

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit ;
      border: 3x solid red;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'purple'};
        color: brown;
`

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

nameChangedHandler = (event, id ) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })

  const person ={ ...this.state.persons[personIndex]}

  person.name = event.target.value

  const persons =[...this.state.persons]
  persons[personIndex] = person

    this.setState ({ persons: persons}  )}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons
this.setState({showPersons: !doesShow}) 
}


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit' ,
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue',
        color: 'brown'
      }
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
      key={person.id}
      changed={(event)=> this.nameChangedHandler(event, person.id)} />
    })}
    </div>
    )
    style.backgroundColor = 'red'
    style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
    }
}

const classes = []
if (this.state.persons.length <= 2){
classes.push('red')
}
if (this.state.persons.length <= 1){
  classes.push('bold')
}

return (
  // <StyleRoot>
  <div className="App">
    <h1>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <StyledButton alt={this.state.showPersons}
      onClick={this.togglePersonsHandler}>
        Toggle Persons
        </StyledButton>
    {persons}
    <hr />
    
  </div>
  // </StyleRoot>
);
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}
}

export default App;

// export default Radium(App);