import React from "react";
import { NavLink } from 'react-router-dom'

import LoginWithAccount from '../../interfaces/LoginWithAccount';
import LoginWithForm from '../../interfaces/LoginWithForm'
import CreateAccount from '../../interfaces/CreateAccount';




const HomePage = () => {
  return (
    <>
      <main className='main-content'>
        <h1 className='main-content__logo'>Spotify</h1>
        <p className='main-content__describe'>Please log in to Spotify to contiune</p>
        <LoginWithAccount title="Log in" />
        <div className="stroke">
          <div className='line'></div>
          <p>or</p>
          <div className='line'></div>
        </div>
        <LoginWithForm />
        <div className="stroke">
          <div className='line' style={{ width: "100%" }}></div>
        </div>
        <p style={{ fontWeight: "700" }}>You dont have a account yet?</p>
        <NavLink to={'signup'} className="main-content__signup">Sign up for Spotify</NavLink>

      </main>

    </>
  );
};

export default HomePage;