import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Layout.css'

function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="layout">
      {/* Navigation - Office Style */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">Ayush Tiwari</div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/blogs" 
                className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}
              >
                📝 Tech Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/papers" 
                className={`nav-link ${isActive('/papers') ? 'active' : ''}`}
              >
                📄 PaperShelf
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link nav-button-link"
                style={{ background: 'none', border: 'none', padding: 0 }}
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/', { state: { scrollTo: 'contact' } })
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                📧 Contact
              </button>
            </li>
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* Footer - Corporate Style */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-quote">
            "You miss 100% of the queries you don't optimize."
          </p>
          <p className="footer-author">- Michael Scott (probably)</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
