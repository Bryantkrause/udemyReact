import React from 'react';

const person = (props) => {
    return (
        <div>
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


export default person