import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/carousel.js";
import "bootstrap/js/src/dropdown.js";
import "bootstrap/js/src/offcanvas.js";
import { MarvelContextProvider } from './context/MarvelContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { colors } from './StyledComponents/Colors.js'
import { GlobalStyles } from './StyledComponents/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MarvelContextProvider>
    <ThemeProvider theme={colors}>
      <GlobalStyles/>
    <App />
    </ThemeProvider>
    </MarvelContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
