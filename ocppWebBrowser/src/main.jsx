import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import LoginPage from './components/Login/LoginPage.jsx'
import HomePage from './components/Home/HomePage.jsx'
import ChooseConnector from './components/ChooseConnector/ChooseConnector.jsx'
import StartCharging from './components/StartCharging/StartCharging.jsx'
import SessionInfo from './components/SessionInfo/SessionInfo.jsx'
import SessionFinished from './components/SessionFinished/SessionFinished.jsx'

// Routes can be nested as per requirement
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<LoginPage />} />
      <Route path='home' element={<HomePage />} />
      <Route 
        path='chooseConnector' 
        element={<ChooseConnector />} 
      />
      <Route path='startCharging' element={<StartCharging />} />
      <Route path='sessionInfo' element={<SessionInfo />} />
      <Route path='sessionFinished' element={<SessionFinished />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
