import {createContext, useContext} from 'react'

// Context with some default value
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// You can directly export provider from here
export const ThemeProvider = ThemeContext.Provider

// Also export custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}