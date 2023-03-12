import React from "react";
import PropTypes from 'prop-types'
import appleLogo from './../../../assets/images/apple1.png';
import facebookLogo from './../../../assets/images/facebook.png';
import googleLogo from './../../../assets/images/google1.png';



function LoginWithAccount(props){


    return(
      <div className="login-button">
      <button className="login-button__facebook">
        <img className="login-button__facebook__logo" src={facebookLogo}/>
        <h2 className="login-button__title">{props.title} with Facebook</h2>
      </button>
      <button className="login-button__apple">
      <img className="login-button__apple__logo" src={appleLogo}/>
        <h2 className="login-button__title">{props.title} with Apple</h2>
      </button>
      <button className="login-button__google">
        <img className="login-button__google__logo" src={googleLogo}/>
        <h2 className="login-button__title">{props.title} with Goggle</h2>
      </button>
      </div>
    )
}

LoginWithAccount.propTypes= {
  title: PropTypes.string
}
export default LoginWithAccount;