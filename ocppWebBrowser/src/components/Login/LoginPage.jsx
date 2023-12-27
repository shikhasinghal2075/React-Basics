import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAppState} from '../../features/slice/slice';
import {useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);
  const navigate = useNavigate();

  // For debugging purpose
  // useEffect(() => {
  //   // Log the appState variable
  //    console.log('appState:', appState);
  // },[appState])


  const handleLogin = () => {
    // Check if both phone number and password are provided
    if (!phoneNumber || !password) {
      setError('Phone number and password are required fields.');
      return;
    }

    // Check the format of the phone number (simple example)
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError('Invalid phone number format. Please enter a valid 10-digit number.');
      return;
    }

    // Clear any previous error
    setError('');

    const loginData = {
      phoneNumber: phoneNumber,
      password: password,
    };

    fetch('http://localhost:8081/api/loginWithPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      // credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        if(data['message'] ===  "Successfully login."){
          console.log('Login successful:', data);
          // Assuming successful login, change appState to 'home'
          dispatch(setAppState({value: 'home'}));
          navigate(`/home`);
        }
        else{
          console.log('Login Failed:', data);
          setError('Invalid credentials. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError('Invalid data. Please try again.');
      });
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="input-container">
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
