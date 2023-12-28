import React, { useState } from 'react';
import './HomePage.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { setAppState, setChargers} from '../../features/slice/slice';

const HomePage = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error message
    // setErrorMessage('');

    // Validation for compulsory fields
    if (!longitude || !latitude) {
      setErrorMessage('Longitude and Latitude are required fields.');
      return;
    }

    // Validation for numeric values (numbers or decimals)
    const numericRegex = /^-?\d*\.?\d+$/;

    if (!numericRegex.test(longitude) || !numericRegex.test(latitude)) {
      setErrorMessage('Longitude and Latitude must be numeric values.');
      return;
    }


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
        // console.log('Charger data:', data);
        if (Array.isArray(data)){
        // Assuming successful chargers found, navigate to choose connector screen
          dispatch(setAppState({value: 'chooseConnector'}));
          setErrorMessage('')
          dispatch(setChargers(data))
        }
        else{
          console.log('No charger Found', data);
          setErrorMessage('No charger found for the given location.');
        }
      })
      .catch(error => {
        console.error('Error in response', error);
        setErrorMessage('Error in processing your request. Please try again.'); // Set error message
      });
  };

  return (
    <div className="home-container">
      <div className="text-center">
        <h1>Find Nearby Chargers</h1>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Display error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="longitude">Longitude<span className="required-symbol">*</span>:</label>
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
          <label htmlFor="latitude">Latitude<span className="required-symbol">*</span>:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter latitude"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="submit-button mx-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
