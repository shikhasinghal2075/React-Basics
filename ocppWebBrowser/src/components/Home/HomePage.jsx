// Home.jsx

import React, { useState } from 'react';
import './HomePage.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { setAppState} from '../../features/slice/slice';
import {useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);

    // For debugging purpose
  // useEffect(() => {
  //   // Log the appState variable
  //    console.log('appState:', appState);
  // },[appState])

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions with the longitude and latitude values here
    console.log('Longitude:', longitude);
    console.log('Latitude:', latitude);
    
    
    // Add further logic like making an API call or dispatching actions to Redux
    const postData = {
      longitude : longitude,
      latitude: latitude,
    };

    // Construct the URL with parameters
    const baseUrl = `http://localhost:8081/api/getChargersByLocation`
    const url = `${baseUrl}?longitude=${longitude}&latitude=${latitude}`;

    fetch(url,{ 
    method: 'GET',
    credentials: "include"
  })
      .then(response => response.json())
      .then(data => {
        console.log('Charger data:', data);
        // if(data['message'] ===  "Successfully login."){
         
        //   // Assuming successful login, change appState to 'home'
          dispatch(setAppState({value: 'listChargers'}));
        //   navigate(`/home`);
        // }
        // else{
        //   console.log('Login Failed:', data);
        //   setError('Invalid credentials. Please try again.');
        // }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError('Invalid data. Please try again.');
      });
  
  };

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Enter longitude"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter latitude"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
