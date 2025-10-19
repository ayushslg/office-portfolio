import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage, default to 'noir'
    const saved = localStorage.getItem('portfolio-theme')
    return saved || 'noir'
  })

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('portfolio-theme', theme)
    
    // Update data-theme attribute on body
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'noir' ? 'office' : 'noir')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
