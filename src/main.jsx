import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import {theme} from './Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</React.StrictMode>,
)
