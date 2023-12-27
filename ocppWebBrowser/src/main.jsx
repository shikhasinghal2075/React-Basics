import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import LoginPage from './components/Login/LoginPage.jsx'
import HomePage from './components/Home/HomePage.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <LoginPage />
//       }
//     ]
//   }
// ])


// Routes can be nested as per requirement
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<LoginPage />} />
      <Route path='home' element={<HomePage />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
