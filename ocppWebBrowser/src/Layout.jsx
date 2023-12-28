import React, {useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout(){
    const appState = useSelector((state) => state.appState);
    const navigate = useNavigate();
    const chargers = useSelector((state) => state.chargers)

    // Just to monitor data in console
    useEffect(() => {
        console.log('Chargers data:', chargers);
        // Extract Charger Info and Connector Info
        if(chargers.length > 0){
            chargers.map((charger) => {
                console.log('Charger Information:', charger);
                charger['connectors'].map((connector) => {
                    console.log('Connector Information:', connector);
                })
            })
        }
    },[chargers])

    useEffect(() => {
        console.log('appState:', appState);
        // Log the appState variable
        if(appState['value'] === 'home'){
            navigate(`/home`);
        }
        else if(appState['value'] === 'login'){
            navigate(``);
        }
        else{
            const path = appState['value']
            navigate(`/home/${path}`);
        }        
    },[appState])
    
    return(
        <>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
        </>
    )
}

export default Layout