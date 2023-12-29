import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAppState, setSelectedConnector, setChargers} from '../../features/slice/slice';
import './ChooseConnector.css';

function ChooseConnector(){
    const dispatch = useDispatch();
    const chargers = useSelector((state) => state.chargers)
    const appState = useSelector((state) => state.appState);
    const [buttons, setButtons] = useState([])
    
    useEffect(() => {
      // Run this function whenever chargers change
      // console.log('Choose connector page initialized!');
  
      const newButtons = chargers.flatMap((charger) => {
        const chargerButtons = charger.connectors.map((connector) => {
          let tempImage = ''
          if(connector.type === "GB/T"){
            tempImage = "gbt.jpg"
          }
          else if(connector.type === "CCS-2"){
            tempImage = "ccs2.jpg"
          }
          else if(connector.type === "Type-2 AC"){
            tempImage = "type2AC.png"
          }
          
          return{
            chargerIdentity: charger.chargerIdentity,
            connectorId: connector.connectorId,
            connectorStatus: connector.status,
            connectorType: connector.type,
            power: connector.maximumPowerkW,
            maximumVoltage: connector.maximumVoltage,
            maximumCurrent: connector.maximumCurrent,
            image: tempImage
        }});
  
        return {
          chargerIdentity: charger.chargerIdentity,
          chargerAddress: charger.address,
          ratedPower: charger.ratedPowerkW,
          numberOfConnectors: charger.numberOfConnectors,
          buttons: chargerButtons,
        };
      });

      // console.log(newButtons);
      setButtons(newButtons);
    }, []);


const handleButtonClick = (chargerIdentity, connectorId) => {
  console.log(`Charger: ${chargerIdentity}, Connector: ${connectorId} clicked`);
  dispatch(setSelectedConnector({
    chargerId: `${chargerIdentity}`,
    connectorId: `${connectorId}`
  }));

  dispatch(setAppState({value: 'startCharging'}));

  // Empty chargers now
  dispatch(setChargers([]))
};

const handleBackButtonClick = () => {
  dispatch(setAppState({value: 'home'}));
}

return (
  <div className="charger-container">
    <h1 className="page-heading font-bold text-center">Choose connector to start charging</h1>
    <button
        onClick={handleBackButtonClick}
        className="button-style absolute top-4 right-4 p-2 background-color:4caf50 text-white rounded"
      >
        Back
    </button>
    {buttons.map((charger, index) => (
      <div key={index} className="charger-box">
        <div className="charger-title">{`Charger: ${charger.chargerIdentity}`}</div>
        <div className="charger-info text-center">
          <p>{`Address: ${charger.chargerAddress}`}</p>
          <p>{`Rated Power: ${charger.ratedPower} kW`}</p>
          <p>{`Number of Connectors: ${charger.numberOfConnectors}`}</p>
        </div>
        <div className="button-container">
          {charger.buttons.map((button, buttonIndex) => (
            <button
              key={buttonIndex}
              onClick={() => handleButtonClick(button.chargerIdentity, button.connectorId)}
              className="button-style"
            >
              <div className="text-lg font-bold mb-2">{`Connector: ${button.connectorId}`}</div>
              <div className="center-image">
              <img src={`/images/${button.image}`} alt="Button Image" className="button-image" style={{ width: '150px', height: '150px' }}  />
              </div>
              <div className="text-sm">{`Status: ${button.connectorStatus}`}</div>
              <div className="text-sm">{`Connector Type: ${button.connectorType}`}</div>
              <div className="text-sm">{`Maximum Power: ${button.power} kW`}</div>
              <div className="text-sm">{`Voltage Rating: ${button.maximumVoltage} V`}</div>
              <div className="text-sm">{`Current Rating: ${button.maximumCurrent} A`}</div>
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);
}

export default ChooseConnector;