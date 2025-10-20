import './Home.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { PaperClip, CornerRibbon } from '../components/OfficeElements'
import { BatmanLogo, LegoAccent, BatSymbol } from '../components/BatmanElements'
import '../components/BatmanElements.css'
import { CodePanel } from '../components/CodePanel'
import '../components/CodePanel.css'
import { ICPCLogo } from '../components/ICPCLogo'
import { ThreeGreetingSequence } from '../components/ThreeGreetingSequence'

function Home() {
  const location = useLocation()
  const { theme } = useTheme()
  
  useEffect(() => {
    if (location.state && location.state.scrollTo === 'contact') {
      // Small timeout to ensure layout rendered
      setTimeout(() => {
        const el = document.getElementById('contact')
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }, [location])
  return (
    <div className="home-page">
      {/* Hero Section - Employee ID Badge Style */}
      <section className="hero-section">
        <div className="hero-decorations">
          <BatmanLogo size="60px" style={{ position: 'absolute', top: '20px', right: '40px', opacity: 0.8 }} />
          <LegoAccent position={{ top: '60px', left: '40px' }} color="#C41E3A" />
          <LegoAccent position={{ bottom: '100px', right: '60px' }} color="#0066CC" />
        </div>
        
        <div className="badge-container">
          <a 
            href="https://www.linkedin.com/in/ayushtiwari323/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="badge-link"
            aria-label="View Ayush Tiwari's LinkedIn profile"
          >
            <div className="id-badge">
              <div className="badge-header">
                <div className="company-logo">MICROSOFT</div>
                <div className="badge-type">EMPLOYEE</div>
              </div>
              
              <div className="badge-photo">
                <img 
                  src="./images/profile/pp.jpg" 
                  alt="Profile"
                  className="photo-placeholder"
                />
              </div>
              
              <div className="badge-info">
                <div className="badge-name">AYUSH TIWARI</div>
                <div className="badge-title">Software Engineer II</div>
                <div className="badge-id">ID: DM-2025-DB</div>
              </div>
              
              <div className="badge-footer">
                <div className="badge-barcode">||||||||||||||||||||</div>
              </div>
            </div>
          </a>
  </div>
  <div className="codepanel-wrapper">
    <CodePanel />
  </div>
        
        <div className="hero-intro">
          <h1 className="hero-heading"><ThreeGreetingSequence /></h1>
          <p className="hero-subtitle">
            Database Extraordinaire | SQL Dark Knight | Data Architect
          </p>
          <p className="hero-description">
            Welcome to my corner of the Dunder Mifflin Database Division! 
            Just like Michael Scott manages the Scranton branch, I manage databases 
            with the same passion (but hopefully more competence). From optimizing 
            queries faster than Dwight farms beets, to architecting systems smoother 
            than Jim's pranks, I'm here to turn data chaos into organized excellence.
          </p>
          
          {/* Spotify Player - Inline */}
          <div className="spotify-inline">
            <iframe 
              style={{ borderRadius: '0px' }}
              src="https://open.spotify.com/embed/track/4PTG3Z6ehGkBFwjybzWkR8?utm_source=generator" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Stats - Dundee Awards Style */}
      <section className="stats-section">
        <BatSymbol style={{ position: 'absolute', left: '50%', top: '-30px', transform: 'translateX(-50%)' }} />
        <h2 className="section-title">
          {theme === 'noir' ? '⚡ My Dark Knight Achievements ⚡' : '🏆 My Dundies 🏆'}
        </h2>
        <div className="stats-grid">
          <a 
            href="https://icpc.global/ICPCID/KF0AJPIVWM4B" 
            target="_blank" 
            rel="noopener noreferrer"
            className="stat-card stat-card-link"
          >
            <PaperClip className="stat-paperclip" style={{ position: 'absolute', top: '-10px', right: '10px', opacity: 0.3 }} />
            <div className="stat-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>
              <svg
                width={70}
                height={34}
                viewBox="0 0 90 42"
                role="img"
                aria-label="ICPC logo"
              >
                <circle cx="18" cy="14" r="8" fill="#C73A36" stroke="#751e1b" strokeWidth="1.2" />
                <circle cx="45" cy="14" r="8" fill="#E5B840" stroke="#8a6a14" strokeWidth="1.2" />
                <circle cx="72" cy="14" r="8" fill="#2F6FBF" stroke="#1b3e68" strokeWidth="1.2" />
                <path d="M18 22 l0 4" stroke="#82403D" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M45 22 l0 4" stroke="#8a6a14" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M72 22 l0 4" stroke="#1b3e68" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M14 10 q2 2 0 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <path d="M41 10 q2 2 0 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <path d="M68 10 q2 2 0 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <text x="45" y="38" textAnchor="middle" fontSize="10" fontFamily="Arial, sans-serif" fill="#C2C2C4" letterSpacing="1">ICPC</text>
              </svg>
            </div>
            <div className="stat-number">3x</div>
            <div className="stat-label">ICPC Regionalist</div>
          </a>
          <a 
            href="https://www.postgresql.org/docs/17/release-17.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="stat-card stat-card-link"
            style={{ position: 'relative' }}
          >
            <CornerRibbon text="BEST" />
            <div className="stat-icon">🐘</div>
            <div className="stat-number" style={{ fontSize: '1.5rem' }}>PostgreSQL</div>
            <div className="stat-label">Contributor (v17 & v18)</div>
          </a>
          <div className="stat-card stat-card-construction">
            <div className="construction-badge">🚧 Under Construction</div>
            <div className="stat-icon" style={{ opacity: 0.3 }}>📝</div>
            <div className="stat-number" style={{ opacity: 0.3 }}>TBD</div>
            <div className="stat-label" style={{ opacity: 0.3 }}>Coming Soon</div>
          </div>
          <div className="stat-card stat-card-construction">
            <div className="construction-badge">🚧 Under Construction</div>
            <div className="stat-icon" style={{ opacity: 0.3 }}>🎓</div>
            <div className="stat-number" style={{ opacity: 0.3 }}>TBD</div>
            <div className="stat-label" style={{ opacity: 0.3 }}>Coming Soon</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-header-block">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle exact-line">Submit the form below or shoot me an email at: <a href="mailto:ayushtiwari.slg01@gmail.com" className="link-underline">ayushtiwari.slg01@gmail.com</a></p>
        </div>
        <div className="contact-container">
          {/* Left side - Form */}
          <div className="contact-left">
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              className="contact-form"
              noValidate
              onSubmit={(e) => {
                const form = e.currentTarget;
                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const message = form.message.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let hasError = false;
                const setError = (field, msg) => {
                  field.setAttribute('aria-invalid', 'true');
                  field.nextElementSibling?.classList.add('show-error');
                  field.nextElementSibling && (field.nextElementSibling.textContent = msg);
                  hasError = true;
                };
                // Reset previous
                Array.from(form.querySelectorAll('[aria-invalid="true"]')).forEach(el => el.removeAttribute('aria-invalid'));
                Array.from(form.querySelectorAll('.form-hint.show-error')).forEach(el => el.classList.remove('show-error'));
                if(!name) setError(form.name, 'Name is required.');
                if(!email) setError(form.email, 'Email is required.');
                else if(!emailPattern.test(email)) setError(form.email, 'Enter a valid email.');
                if(!message) setError(form.message, 'Message cannot be empty.');
                if(hasError) {
                  e.preventDefault();
                }
              }}
            >
              <div className="form-row underline-row">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your Name"
                  className="form-input minimal"
                  aria-required="true"
                />
              </div>
              <div className="form-row underline-row">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Your Email"
                  className="form-input minimal"
                  aria-required="true"
                />
              </div>
              <div className="form-row underline-row">
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Your Message"
                  className="form-textarea minimal"
                  aria-required="true"
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Let's Connect!
                </button>
              </div>
            </form>
          </div>
          {/* Right side - Backdrop Image */}
          <div className="contact-right backdrop-panel" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}images/${theme === 'noir' ? 'backdrop.png' : 'office-backdrop.png'}`}
              alt="Decorative Backdrop"
              className="contact-backdrop-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
