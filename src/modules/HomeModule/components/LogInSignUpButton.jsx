/*eslint react/prop-types: */	

import React from 'react';
import classes from './LogInSignUpButton.module.scss'



const LogInSignUpButton = (props) => {


    return (

        <button  disabled={props.disabled} className={`${classes.lookOfButton} ${props.disabled && classes.disabledStyle} `}>
            <span>{props.title}</span>
        </button>
    )
}



export default LogInSignUpButton;