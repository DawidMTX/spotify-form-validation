import React from "react";
import PropTypes from 'prop-types'
import ErrorMessage from "./ErrorMessage";

const Input = ({id, label, placeholder, type, errorMsg, register, extraText}) =>{

    return(
        <div className="registerForm__input">
            <label htmlFor={id}>{label}</label>
            <input className="windowForm"  style={{ border: errorMsg  ? ' 1px solid red' : '' }} id={id} type={type} placeholder={placeholder} {...register}/>
            <p className="extraText">{extraText}</p>
            <ErrorMessage error={errorMsg}/>
            
        </div>
    )
}

Input.propTypes= {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    register: PropTypes.object,
    errorMsg: PropTypes.string,
    extraText: PropTypes.string
}

export default Input;