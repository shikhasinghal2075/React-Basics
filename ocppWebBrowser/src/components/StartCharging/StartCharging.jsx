import React,{useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAppState,setTransactionId} from '../../features/slice/slice';

function StartCharging (){
    const selectedConn = useSelector((state) => state.selectedConnector)
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    let transactionStartedFlag;

    const checkTranscationStarted = function(){
        // Construct the URL with parameters
        const baseUrl = `http://localhost:8081/api/transactionStartedStatus`
        const url = `${baseUrl}?chargerId=${selectedConn.chargerId}&connectorId=${selectedConn.connectorId}`;
        
        // Hit transaction started request
        fetch(url,{ 
            method: 'GET',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Transaction Started status response: ', data);
            if(data["Transaction Id"] !== null){
              const transactionId = data["Transaction Id"]
              clearInterval(transactionStartedFlag);
              dispatch(setAppState({value: 'sessionInfo'}));
              // console.log(typeof transactionId)
              dispatch(setTransactionId(transactionId));
            }
        })
        .catch(error => {
            console.error('Error during fetching transaction started status', error);
        });
    }
    
    // console.log(selectedConn)
    const handleStartCharging = () => {
        // Construct the URL with parameters
        const baseUrl = `http://localhost:8081/api/RemoteStart`
        const url = `${baseUrl}?chargerId=${selectedConn.chargerId}&connectorId=${selectedConn.connectorId}`;

        setErrorMessage('Please wait while session starts...');

        // Hit remote start request
        fetch(url,{ 
            method: 'GET',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
          if(data['message'] === "Remote Start Request sent to Charger!"){
            console.log('Remote start successful:', data);
            // Set an interval to call the sayHello function every 1000 milliseconds (1 second)
            transactionStartedFlag = setInterval(checkTranscationStarted, 5000);
          }
          else if(data['error'] === "User not allowed to charge"){
            setErrorMessage(data['error']);
          }
          else{
            setErrorMessage("User not allowed to charge");
          }
        })
        .catch(error => {
            console.error('Error during remote start:', error);
            setErrorMessage('Invalid data. Please try again.');
        });
    }

    const handleBackButton = () => {
      clearInterval(transactionStartedFlag);
      dispatch(setAppState({value: 'home'}));
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Click Start button to start charging</h1>
        {/* Display Error Message in Red */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
  
        {/* Charger and Connector Information */}
        <div className="text-lg mb-2">{`Charger Identity: ${selectedConn.chargerId}`}</div>
        <div className="text-lg mb-4">{`Connector Id: ${selectedConn.connectorId}`}</div>
  
        {/* Start Charging Button */}
        <button onClick={handleStartCharging} className="bg-green-500 text-white py-2 px-4 rounded-md mb-2">
          Start Charging
        </button>
  
        {/* Back Button (positioned in the top-right corner) */}
        <button
          onClick={handleBackButton}
          className="bg-green-500 text-white py-2 px-4 rounded-md absolute top-4 right-4"
        >
          Back
        </button>
      </div>
    );
}

export default StartCharging;