import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        // <div>Layout</div>        // Default
        /*
        Only things inside outlet will be changed, and here we want to keep header and footer same but change center
        */
        <>
        <Header />
        <Outlet />          
        <Footer />
        </>
    )
}

export default Layout