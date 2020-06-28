import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className='Input'>
            <p>Enter Username</p>
<input type="text" onChange={props.changed} value={props.name}></input>

       </div>
    )
}


export default userInput