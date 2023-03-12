import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase-config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import styled from "styled-components";

const ShowUser = () => {

  const [user, setUser] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser.email);
  });

  const navigate = useNavigate();
  const logOutUser = async () => {
    await signOut(auth)
    navigate('/')
  }

const Button = styled.button`

  padding: 18px 60px;
  background-color: var(--color-green);
  gap:10px;
  border: none;
  border-radius: 50px;
`

  return (
    <div className="LogedUser__contener">
      <h2 className="LogedUser__contener-title">Welcome: </h2>
      <p className="LogedUser__contener-email">{user}</p>
      <Button onClick={logOutUser}>Log out</Button>
    </div>
  )
}


export default ShowUser;