import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import App from './App.jsx'
import './index.css'

// Dynamic cursor path resolution for GitHub Pages: ensure relative path respects base
const base = import.meta.env.BASE_URL || '/office-portfolio/'
const cursorDefault = `${base}lego-cursor-small.png`
const cursorPointer = `${base}lego-pointer-small.png`
// Apply CSS variables early
document.documentElement.style.setProperty('--cursor-url-default', `url('${cursorDefault}') 0 0, auto`)
document.documentElement.style.setProperty('--cursor-url-pointer', `url('${cursorPointer}') 0 0, pointer`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL || '/office-portfolio/'}>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
