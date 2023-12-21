import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // console.log(process.env.REACT_APP_APPWRITE_URL) //This is used if we create using createReact

  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
    <h1>A blog app using appwrite</h1>
    </>
  )
}

export default App
