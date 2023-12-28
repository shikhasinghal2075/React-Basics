import React from "react";
import { useDispatch, useSelector } from 'react-redux';


function ChooseConnector(){
    const dispatch = useDispatch();
    const chargers = useSelector((state) => state.chargers)
    // chargers.map((charger) => {
    //     console.log('Charger Information:', charger);
    //     charger['connectors'].map((connector) => {
    //         console.log('Connector Information:', connector);
    //     })
    // })

    const handleButtonClick = (connector) => {
     console.log("In handle Click")
    };

    return (
        // <div>ChooseConnector</div>
        <div className="flex space-x-4">
            {
                chargers.map((charger) => (
                    // console.log('Charger Information:', charger);
                    charger['connectors'].map((connector) => {
                        // console.log('Connector Information:', connector);
                        <button
                            key={connector.Id}
                            onClick={() => handleButtonClick(connector)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {connector.connectorId}
                      </button>
                    })
                ))
            }
        {/* {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {button.text}
          </button>
        ))} */}
      </div>
    )
}

export default ChooseConnector;