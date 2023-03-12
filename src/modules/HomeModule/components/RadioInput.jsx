import React from "react";
import PropTypes from 'prop-types'

const RadioInput = ({ name, value, id, label, register}) => {

    return (
        <div className="radioInput">
            <input
                className="radioInput-input"
                type="radio"
                name={name}
                value={value}
                id={id}
               {...register} 
              
            />
            <label className="radioInput-label" htmlFor={id}>{label}</label>
           
        </div>
    )
}

RadioInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    register: PropTypes.object
}


export default RadioInput;