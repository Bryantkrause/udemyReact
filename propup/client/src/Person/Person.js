import React from 'react';

const person = (props) => {
    return (
        <div>
    <p>
        Hi my name is {props.name} and i have ran around the sun {props.age} times.
    </p>
    <p>
       {props.children} 
    </p>


    </div>
    )
}


export default person