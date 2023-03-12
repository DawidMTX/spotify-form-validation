import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase-config";
import Input from "../components/Input";
import CheckboxInput from "../components/CheckboxInput";
import LogInSignUpButton from "../components/LogInSignUpButton";
import SelectDate from '../components/SelectDate'
import RadioInput from '../components/RadioInput'
import ErrorMessage from "../components/ErrorMessage";
import { NavLink, Navigate, useNavigate} from 'react-router-dom';
import LoginWithAccount from '../interfaces/LoginWithAccount';



const valid = yup.object({
    email: yup.string().required("Enter corrent email").email("email is not valid"),
    confirmEmail: yup.string().oneOf([yup.ref("email")], "Email must byu maych!"),
    password: yup.string().min(6, "Password must by at least 6 characters"),
    username: yup.string().required("User name is required"),
    gender: yup.string().required("Gender is required"),
    agremment: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
    month: yup.string().required(" Month is required"),
    day: yup.string().required("Day is required"),
    year: yup.string().required("Year is required")

})

const CreateAccount = () => {

    const [error, setError] =useState('')
    const navigate= useNavigate()
    const { register, handleSubmit, formState: { errors, isValid } } = useForm(
        {
            mode: 'onChange',
            resolver: yupResolver(valid)
        }

    )

    const radioInputData = [
        { id: "male", name: "gender", value: "Male", label: "Male" },
        { id: "female", name: "gender", value: "Female", label: "Female" },
        { id: "non-binary", name: "gender", value: "Non-binary person", label: "Non-binary person" },
        { id: "other", name: "gender", value: "Other", label: "Other" },
        { id: "dont want to give", name: "gender", value: "I dont want to give", label: "I dont want to give" }

    ]

    const formSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data)

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setError('')
           navigate('/')
        } catch (error) {
           setError(error.message)
            console.log(error.message)
        }

    }

    return (

        <div className='formContener'>
            <h1 className="formContener__header">Register for free and start listening.</h1>
            <LoginWithAccount title="Sign up" />
            <div className="stroke">
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>
            <h2 className='formContener__title'>Sign up with email and password</h2>
            <form className='registerForm' onSubmit={handleSubmit(formSubmit)}>
                <Input
                    id="email"
                    label="Whats your email?"
                    placeholder="Enter your email"
                    type="text"
                    register={{ ...register("email") }}
                    errorMsg={errors.email?.message}
                />
                <Input
                    id="confirmEmail"
                    label="Confirm email"
                    placeholder="Confirm email"
                    type="text"
                    register={{ ...register("confirmEmail") }}
                    errorMsg={errors.confirmEmail?.message}
                />
                <Input
                    id="password"
                    label="Enter password"
                    placeholder="Enter your password"
                    type="password"
                    register={{ ...register("password") }}
                    errorMsg={errors.password?.message}

                />

                <Input
                    id="username"
                    label="Whats your name?"
                    placeholder="Enter your name"
                    type="text"
                    register={{ ...register("username") }}
                    name="username"
                    errorMsg={errors.username?.message}
                    extraText="This name will be at your profile"
                />

                <div className="registerForm__selectDate">
                    <p className='registerForm__selectDate-title'>What is your date of birth</p>

                    <SelectDate name="data" id="data"
                        options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                        registerMonth={{ ...register("month") }}
                        registerDay={{ ...register("day") }}
                        registerYear={{ ...register("year") }}
                        errorMsg={errors.day?.message || errors.month?.message || errors.year?.message }
                       
                    />

                </div>

                <p>Your gender?</p>
                <div className='registerForm__gender'>
                    {radioInputData.map(data => (
                        <RadioInput
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            value={data.value}
                            label={data.label}
                            register={{ ...register('gender') }}


                        />
                    ))}
                    <ErrorMessage error={errors.gender?.message} />

                </div>


                <CheckboxInput
                    id="offers"
                    label="I want to receive news and offers from Spotify"
                />
                <CheckboxInput
                    id="shareInformation"
                    label="Share my registration information with content providers on Spotify This information may be used for marketing purposes. Note: In accordance with our privacy policy, your data may be sent to a country outside the EEA."
                />

                <div>
                    <div className="loginPanel__checkbox">
                        <input type="checkbox" id="agrrement" name="agrrement" {...register('agremment')} />
                        <label htmlFor="agrrement">I accept the  <NavLink className='activeLink' to="#">Spotify Terms of Use.</NavLink></label>
                    </div>
                    <ErrorMessage error={errors.agremment?.message} />
                </div>


                <p style={{color: 'red'}}>{error && error}</p>

                <LogInSignUpButton disabled={!isValid} title="Sign up" type='submit' />
            </form>
            <div className="formContener__login">Already have an account? <NavLink to="/" className="formContener__login-button"> Log in.</NavLink></div>
                       
        </div>
    )
}

export default CreateAccount;