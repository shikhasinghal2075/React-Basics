import { useState } from 'react'    // Hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 15 is default value passed
  let [counter, updateCounter] = useState(15)

  // let counter = 15   //This variable will not propagate to UI

  const addvalue = () => {
    // console.log(`Clicked ${counter} `, Math.random())
    // counter = counter + 1

    // Normally to update counter once
    if(counter <= 19){
      updateCounter(counter+1)
    }


    // // Counter value is being returned after call back --> this will increase counter multiple times
    // updateCounter(prevCounter => prevCounter+1)
    // updateCounter(prevCounter => prevCounter+1)
    // updateCounter(prevCounter => prevCounter+1)
    // updateCounter(prevCounter => prevCounter+1)
    

  }

  const removevalue = () => {
    if(counter >= 1){
      updateCounter(counter-1)
    }
  }

  return (
    <>
      <h1> Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>

      <p>footer {counter}</p>
    </>
  )
}

export default App
