import React from 'react';
import './Person.css'
import styled from 'styled-components'
// import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        // <div className='Person' style={style}>
        styled.div`
        `
    <p onClick={props.click}>
        Hi my name is {props.name} and i have ran around the sun {props.age} times.
    </p>
    <p>
       {props.children} 
    </p>
        <input type="text" onChange={props.changed} value={props.name} />
        styled.div``
    // </div>
    )
}


export default person