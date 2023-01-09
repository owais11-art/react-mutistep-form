import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyles } from './styled-components/Global'
import { ThemeProvider } from 'styled-components'
import Store from './store/Store'

const theme = {
  colors: {
    marineBlue: "hsl(213, 96%, 18%)",
    purpleBlue: "hsl(243, 100%, 62%)",
    pastelBlue: "hsl(228, 100%, 84%)",
    lightBlue: "hsl(206, 94%, 87%)",
    strawberryRed: "hsl(354, 84%, 57%)",
    coolGrey: "hsl(231, 11%, 63%)",
    lightGrey: "hsl(229, 24%, 87%)",
    magnolia: "hsl(217, 100%, 97%)",
    albaster: "hsl(231, 100%, 99%)",
    white: "hsl(0, 0%, 100%)"
  },
  fonts: {
    ubuntu: "'Ubuntu', sans-serif"
  },
  screenSize: {
    xl: "1440px",
    lg: "991px",
    md: "768px",
    sm: "500px",
    xs: "375px"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Store>
        <App />
      </Store>
    </ThemeProvider>
  </BrowserRouter>
)
