import React, {useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout(){
    const appState = useSelector((state) => state.appState);

    useEffect(() => {
        // Log the appState variable
         console.log('appState:', appState);
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