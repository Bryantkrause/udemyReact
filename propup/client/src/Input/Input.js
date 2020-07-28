import React from 'react';
import './Input.css'

const input = (props) => {
    return (
        <div className='Input'>
    <p onClick={props.click}>
        Hi my name is {props.name} and i have ran around the sun {props.age} times.
    </p>
    <p>
       {props.children} 
    </p>
        <input type="text" onChange={props.changed} value={props.name} />

    </div>
    )
}


export default input