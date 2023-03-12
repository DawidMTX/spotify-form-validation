import React from 'react'
import PropTypes from 'prop-types'
import errorImage from './../../../assets/images/warning.png'
import classes from './ErrorMessage.module.scss'


const ErrorMessage = (props) => {

  

    return (
        <div className={classes.error}>
           {props.error && <img src={errorImage}/> }
            <p>{props.error}</p>
        </div>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string
}

export default ErrorMessage;