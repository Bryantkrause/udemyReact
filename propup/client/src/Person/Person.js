import React from 'react';
import './Person.css'
import styled from 'styled-components'
// import Radium from 'radium'


const StyledDiv = styled.div`
width: 60%;
margin: 16x auto;
box-shadow: 0 3px 4 px #ccc;
text-align: center

@media (min-width: 500px){
        width: 450px
}

`

const person = (props) => {
    // const style = {
    //     '@media(min-width: 500px)': {

    //         width: '450px'
    //     }
    // }
    return (
        // <div className='Person' style={style}>
        <StyledDiv>
    <p onClick={props.click}>
        Hi my name is {props.name} and i have ran around the sun {props.age} times.
    </p>
    <p>
       {props.children} 
    </p>
        <input type="text" onChange={props.changed} value={props.name} />
       
        </StyledDiv>
    )
}


export default person