import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: "Click me to visit google"
}

const anotherElement = (
  <a href="https:google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement2 = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'click me to visit google',
  anotherUser //Variable injection
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // Approach-1
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  // You can return a single element only --> use fragment

  // Approach-2
  // <>
  //   <Chai />
  //   <h1>Chai and React</h1>
  //   <p>Test Body</p>
  // </>

  //Approach-3
  // <MyApp />

   //Approach-4
  // <ReactElement />  // It cannot be used like this
  // ReactElement     // It will not work like this
  // anotherElement
  reactElement2
)
