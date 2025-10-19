import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-slider-container">
      <button
        className="theme-slider"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'noir' ? 'Office' : 'Noir'} theme`}
        title={`Currently in ${theme === 'noir' ? 'Noir' : 'The Office'} mode. Click to switch.`}
      >
        <span className="slider-icon slider-icon-left">🦇</span>
        <div className={`slider-track ${theme === 'office' ? 'office-active' : ''}`}>
          <div className="slider-thumb" />
        </div>
        <span className="slider-icon slider-icon-right">🏢</span>
      </button>
    </div>
  )
}

export default ThemeToggle
