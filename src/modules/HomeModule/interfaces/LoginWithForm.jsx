
import React from "react";
import { auth } from "../services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useNavigate, NavLink } from "react-router-dom";
import LogInSignUpButton from "../components/LogInSignUpButton";
import Input from "../components/Input";
import CheckboxInput from "../components/CheckboxInput";
import { useState } from "react";


const valid = yup.object({
    email: yup.string().required("Enter corrent email").email("email is not valid"),
    password: yup.string().required("Enter your password."),
})


const LoginWithForm = () => {

    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors, isValid } } = useForm(
        {
            mode: 'onChange',
            resolver: yupResolver(valid)
        }
    )

    const navigate = useNavigate();

    const logIn = (data, e) => {
        e.preventDefault();

        const sendData = async () => {
            try {
                const user = await signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                )
                setError('')
                navigate('/login')
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            }
        }
        sendData();

    }

    return (
        <form className='registerForm' onSubmit={handleSubmit(logIn)}>

            <Input
                id="email"
                label="Whats your email?"
                placeholder="Enter your email"
                type="text"
                register={{ ...register("email") }}
                errorMsg={errors.email?.message}
            />
            <Input
                id="password"
                label="Enter password"
                placeholder="Enter your password"
                type="password"
                register={{ ...register("password") }}
                errorMsg={errors.password?.message}
            />
            <p style={{ color: "red" }}>{error && error}</p>
            
            <div className="loginPanel">
                <NavLink className="DoNotRemeberPasswordLink" to="#">Do not you remeber a password?</NavLink>
                <div className="loginPanel__contener">
                    <CheckboxInput
                        id="remember"
                        label='Remember Me'
                    />
                    <LogInSignUpButton disabled={!isValid} title="Log in" type='submit' />
                </div>
            </div>


        </form>
    )
}




export default LoginWithForm;