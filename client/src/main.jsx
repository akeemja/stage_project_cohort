import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CssBaseline, ThemeProvider } from "@mui/material"
import { MainBox, MainContainer, theme } from './styles'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CssBaseline />
      <MainBox >
        <MainContainer id="root-content" maxWidth="md">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MainContainer>
      </MainBox>
  </StrictMode>
)
