import React, {useEffect, useState} from "react";
import { useLoaderData } from 'react-router-dom'

import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'

import {useDispatch, useSelector} from 'react-redux'
import { addUserCredential } from "../../features/slice/slice";


function Login(){
    // const [actionTodo, setActionTodo] = useState("Sign Up")

    // Define state variables to store input values
    const [phoneNumberVar, setPhoneNumber] = useState('');
    const [passwordVar, setPassword] = useState('');

        // Loader data will be returned from function defined below
    const data = useLoaderData()

    const postDataToSend = useSelector(state => state.userCredentials)

    const dispatch = useDispatch()

    const [postData, setPostData] = useState({
        // Your data to be sent in the request body
        phoneNumber: phoneNumberVar,
        password: passwordVar,
      });

    // Loader data will be returned from function defined below
    // const data = useLoaderData()

    // Event handler functions to update state when input changes
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPostData({            
            phoneNumber: phoneNumberVar,
            password: passwordVar
        })
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
        setPostData({            
            phoneNumber: phoneNumberVar,
            password: passwordVar
        })
    };

    // useEffect(() => {
    //     // dispatch(addUserCredential({...postData,password: passwordVar, phoneNumber: phoneNumberVar}))
    //     setPostData({        
    //         phoneNumber: phoneNumberVar,
    //         password: passwordVar})
    // },[])


    return (
        <div className="container">
           <div className="header">
             <div className="text">Login</div>
             <div className="underline"></div>
           </div>
           <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" value={phoneNumberVar} onChange={handlePhoneNumberChange} placeholder="Phone Number"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="text" value={passwordVar} onChange={handlePasswordChange} placeholder="Password" />
            </div>
            {/* {actionTodo==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>} */}
            <div className="submit-container">
                {/* <div 
                className={actionTodo === "Login" ? "submit gray" : "submit"}>
                    Sign Up
                </div> */}
                <div 
                className={"submit"}>
                    Login
                </div>
            </div>
           </div>
        </div>
    )
}

export default Login


export const loginInfoLoader = async () => {
    try{
        const response = await fetch('http://localhost:8081/api/loginWithPassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
            },
            body: JSON.stringify(postData),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('Response data:', data);
          return data
        //   return response.json();
    }catch(error){
        console.error('Error during POST request:', error);
    }
};