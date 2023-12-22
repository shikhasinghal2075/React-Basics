import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginSignUp, {loginInfoLoader} from './components/LoginSignUp/LoginSignUp.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// Approach-2 to create router 
// Routes can be nested as per requirement
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> */}
      <Route 
        loader={loginInfoLoader}
        path=''
        element={<LoginSignUp />}
      />
    </Route>
  )
)

// Router provider is a wrapper
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}     
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
