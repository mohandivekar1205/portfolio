import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeProvider } from 'next-themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NextUIProvider attribute="class" defaultTheme="dark">
        <App />
      </NextUIProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
