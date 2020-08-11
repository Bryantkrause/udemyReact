import React from 'react';

const cockpit = (props) => {
    const classes = []
if (props.persons.length <= 2){
classes.push('red')
}
if (props.persons.length <= 1){
  classes.push('bold')
}

    return (
        // console.log('i are cockpit')
        <div>
        <h1>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <StyledButton alt={this.state.showPersons}
      onClick={this.togglePersonsHandler}>
        Toggle Persons
        </StyledButton>
        </div>
        
        )
}

export default cockpit