import React, {useState} from "react";
import { useLoaderData } from 'react-router-dom'

import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'

function LoginSignUp(){
    const [actionTodo, setActionTodo] = useState("Sign Up")

    // Define state variables to store input values
    const [phoneNumberVar, setPhoneNumber] = useState('');
    const [passwordVar, setPassword] = useState('');

        // Loader data will be returned from function defined below
    const data = useLoaderData()

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
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    
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
                className={"submit"}
                onClick={loginInfoLoader}>
                    Login
                </div>
            </div>
           </div>
        </div>
    )
}

export default LoginSignUp

export const loginInfoLoader = async () => {
    try{
        // Modifying the JSON object and updating the state
        // setPostData({
        //     ...postData,
        //     phoneNumber: phoneNumberVar,
        //     password: passwordVar,
        // });

        const testParam = {
            phoneNumber:  "9888035849",
            password: "Karan@21"
        }

        const response = await fetch('http://localhost:8081/api/loginWithPassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
            },
            body: JSON.stringify(testParam),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('Response data:', data);
        //   return response.json();
    }catch(error){
        console.error('Error during POST request:', error);
    }
};