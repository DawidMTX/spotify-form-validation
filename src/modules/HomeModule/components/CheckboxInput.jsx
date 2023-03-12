import React from "react";
import PropTypes from 'prop-types'
import ErrorMessage from "./ErrorMessage";

const CheckboxInput = ({id, label,  errorMsg}) => {

    return(
        <div className="loginPanel__checkbox">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{label}</label>
        <ErrorMessage error={errorMsg}/>
    </div>
    )
}

CheckboxInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    errorMsg: PropTypes.string
}

export default CheckboxInput;