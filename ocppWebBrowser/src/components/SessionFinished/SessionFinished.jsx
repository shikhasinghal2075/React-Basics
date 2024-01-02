import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAppState,setSessionEndInfo,setTransactionId} from '../../features/slice/slice';

function SessionFinished(){
    const dispatch = useDispatch();
    const bill = useSelector((state) => state.sessionEndInfo.bill)
    const unitsConsumed = useSelector((state) => state.sessionEndInfo.unitsConsumed)

    const handleHomeButton = () => {
        // Home Button Clicked
        console.log("Home button clicked")
        dispatch(setSessionEndInfo({unitsConsumed:0,bill:0}))
        dispatch(setTransactionId(0))
        dispatch(setAppState({value: "home"}))
    }
    
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Session END Information</h1>
            {/* Display Error Message in Red */}
            {/* {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} */}

            {/* Charger and Connector Information */}
            <div className="text-lg mb-4">{`Bill: Rs ${bill}`}</div>
            <div className="text-lg mb-2">{`Energy Consumed: ${unitsConsumed} units`}</div>

            {/* Start Charging Button */}
            <button onClick={handleHomeButton} className="bg-green-500 text-white py-2 px-4 rounded-md mb-2">
                Home
            </button>

        </div>
    )
}

export default SessionFinished