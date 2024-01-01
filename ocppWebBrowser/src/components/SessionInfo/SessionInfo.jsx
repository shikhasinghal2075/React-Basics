import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAppState} from '../../features/slice/slice';

function SessionInfo() {
    const transactionId = useSelector((state) => state.transactionId);
    const [soc, setSOC] = useState('N/A');
    const [current, setCurrent] = useState('N/A');
    const [voltage, setVoltage] = useState('N/A');
    const [power, setPower] = useState('N/A');
    const [energy, setEnergy] = useState('N/A');
    const [getMeterValues, setGetMeterValues] = useState(null);
    let getTransactionStopStatus;
    const dispatch = useDispatch();
    

    const checkMeterValues = function () {
        // Construct the URL with parameters
        const baseUrl = `http://localhost:8081/api/meterValues`;
        const url = `${baseUrl}?transactionId=${transactionId}`;

        // Hit transaction started request
        fetch(url, {
            method: 'GET',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Meter values received: ', data);
            if (data["error"] !== "No meter values found") {
                const socVal = data["SOC(Percent)"];
                const currentVal = data["Current(A)"];
                const voltageVal = data["Voltage(V)"];
                const powerVal = data["Power(kW)"];
                const energyVal = data["Energy(kWh)"];

                setSOC(socVal + " %");
                setCurrent(currentVal + " A");
                setPower(powerVal + " kW");
                setEnergy(energyVal + " units");
                setVoltage(voltageVal + " V");

            }
        })
        .catch(error => {
            console.error('Error during fetching transaction started status', error);
        });
    }

    useEffect(() => {
        // Runs one time on page initialization
        console.log("asdfgh ",getMeterValues);
        const intervalId = setInterval(checkMeterValues, 3000);
        setGetMeterValues(intervalId);
    }, []);

    const checkTransactionEndedStatus = () => {
        // Construct the URL with parameters
        const baseUrl = `http://localhost:8081/api/transactionEndedStatus`;
        const url = `${baseUrl}?transactionId=${transactionId}`;

        // Hit transaction started request
        fetch(url, {
            method: 'GET',
            credentials: "include"
        }) 
        .then(response => response.json())
        .then(data => {
            console.log('Transaction Ended status received: ', data);
            if (data["TransactionId"] !== null) {
                console.log("Session stopped successfully and clear interval called")
                clearInterval(getMeterValues);
                clearInterval(getTransactionStopStatus);
                dispatch(setAppState({value:"sessionFinished"}))
            }
        })
        .catch(error => {
            console.error('Error during transaction ended status', error);
        });
    }

    const handleStopCharging = () => {
        console.log("Stop button clicked");
        // clearInterval(getMeterValues);

        // Construct the URL with parameters
        const baseUrl = `http://localhost:8081/api/RemoteStop`;
        const url = `${baseUrl}?transactionId=${transactionId}`;

        // Hit transaction started request
        fetch(url, {
            method: 'GET',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Remote stop response received: ', data);
            if (data["message"] === "Remote Stop sent to the charger") {
                getTransactionStopStatus = setInterval(checkTransactionEndedStatus,5000)
            }
        })
        .catch(error => {
            console.error('Error during remote stop transaction', error);
        });
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Session Information</h1>
            {/* Display Error Message in Red */}
            {/* {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} */}

            {/* Charger and Connector Information */}
            <div className="text-lg mb-2">{`Units Consumed: ${energy}`}</div>
            <div className="text-lg mb-4">{`Power: ${power}`}</div>
            <div className="text-lg mb-2">{`Current: ${current}`}</div>
            <div className="text-lg mb-4">{`Voltage: ${voltage}`}</div>
            <div className="text-lg mb-2">{`SoC: ${soc}`}</div>

            {/* Start Charging Button */}
            <button onClick={handleStopCharging} className="bg-green-500 text-white py-2 px-4 rounded-md mb-2">
                Stop Charging
            </button>

        </div>
    );
}

export default SessionInfo;
