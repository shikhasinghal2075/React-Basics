import React, { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components';


function App() {
  // const [count, setCount] = useState(0)
  // console.log(process.env.REACT_APP_APPWRITE_URL) //This is used if we create using createReact

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  console.log(import.meta.env.VITE_APPWRITE_URL)
  // return (
  //   <>
  //   <h1>A blog app using appwrite</h1>
  //   </>
  // )

  // Custom return
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null



}

export default App
