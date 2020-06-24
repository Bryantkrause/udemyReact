import React from 'react';
import './UserOutPut.css'

const userOutPut = (props) => {
    return (
        <div className='OutPut'>
            <p>Hello {props.name}, I have been waiting for you.</p>

            <p>Thank you {props.name} for finally showing up I apprecaite it.</p>
            <p>{props.children} </p>

       </div>
    )
}


export default userOutPut