import React from "react";
import PropTypes from 'prop-types';
import ErrorMessage from "./ErrorMessage";

const SelectDate = ({ registerDay, registerMonth, registerYear, options, errorMsg}) => {
    return (
        <>
        <div className='registerForm__selectDate-date'>
            <div className='registerForm__selectDate-day'>
                <label htmlFor='day'>Day</label>
                <input id='day' type='text' {...registerDay} pattern='((0?[1-9])|([12][0-9])|(3[01]))'  maxLength='2' placeholder='DD' className='windowForm' />
            </div>

            <div className='registerForm__selectDate-month'>
                <label htmlFor='month'>Month</label>
                <select id="month" className="windowForm" {...registerMonth} >
                    <option value='' selected  disabled >Month</option>
                    {options.map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className='registerForm__selectDate-year'>
                <label htmlFor='year'>Year</label>
                <input id='year' type='text'  placeholder='YYYY'
                    maxLength='4'  {...registerYear} pattern='(19[0-9]{2})|(200)[0-7]' className='windowForm' />
            </div>
            
        </div>
        <ErrorMessage error={errorMsg}/>
        </>
    )
}

SelectDate.propTypes = {
    registerDay: PropTypes.object,
    registerMonth: PropTypes.object,
    registerYear: PropTypes.object,
    options: PropTypes.array,
    name: PropTypes.string,
    errorMsg: PropTypes.string
}

export default SelectDate;