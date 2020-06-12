import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const app = props => {
 const [personsState, setPersonsState ] = useState({
 persons: [ // state = {
      {name: 'Max', age: 28},
      {name: 'Max2', age: 282},
      {name: 'Max3', age: 283},
      {name: 'Max4', age: 284}
    ],
    otherState: 'some other value'
  })

const [otherState, setOtherState ] = useState('some other value')
  
 const switchNameHandler = () => {
    console.log('did clickify')
    // this.state.persons[0].name = "what what" <-------------- THIS IS BAAAAAAAAAAAAAAAAAAAAAAAAAAD
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Max2', age: 282},
        {name: 'Max3', age: 283},
        {name: 'Max4', age: 500},
      ]

    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person name={personsState[0].name} age={personsState[0].age}/>
      <Person name={personsState[1].name} age={personsState[1].age}/>
      <Person name={personsState[2].name} age={personsState[2].age}> this is extra </Person>
      <Person name={personsState[3].name} age={personsState[3].age}/>
    </div>
  );
}


export default app;


  switchNameHandler = () => {
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

  // render() {