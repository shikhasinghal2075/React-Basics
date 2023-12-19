import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Change theme in actual
  useEffect(() => {
    let theme = document.querySelector('html').classList
    // Remove existing theme whether dark OR light
    theme.remove("light","dark")

    // Apply current theme
    theme.add(themeMode)
  },[themeMode])

  return (
    // {/* <h1 className='p-4 bg-pink-400 text-3xl'>React | Context API | Theme Changer</h1> */}
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
