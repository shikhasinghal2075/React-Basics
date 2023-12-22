import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginSignUp from './components/LoginSignUp/LoginSignUp'

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>       
    )
}

export default Layout