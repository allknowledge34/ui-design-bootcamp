import { useState } from 'react'

export function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="y2k-navbar">
      <div className="y2k-container">
        <div className="navbar-inner-row">
          <a href="#top" className="navbar-brand-link" aria-label="Tralance Home">
            <svg className="brand-starburst" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <span>Tralance</span>
          </a>

          <nav className="navbar-links-group" aria-label="Main Navigation">
            <a href="#top" className="nav-link-item">Home</a>
            <a href="#features" className="nav-link-item">Features</a>
            <a href="#workflow" className="nav-link-item">Workflow</a>
            <a href="#preview" className="nav-link-item">Overview</a>
          </nav>

          <div className="navbar-right-group">
            <button
              type="button"
              className="theme-toggle-circle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <a href="#download" className="y2k-pill-btn y2k-pill-btn-sm">
              <span>Download Now</span>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'var(--y2k-purple)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
                ↓
              </span>
            </a>

            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
          <a href="#top" className="nav-link-item" onClick={handleNavClick}>Home</a>
          <a href="#features" className="nav-link-item" onClick={handleNavClick}>Features</a>
          <a href="#workflow" className="nav-link-item" onClick={handleNavClick}>Workflow</a>
          <a href="#preview" className="nav-link-item" onClick={handleNavClick}>Overview</a>
          <a href="#download" className="y2k-pill-btn" onClick={handleNavClick}>
            <span>Download Now</span>
          </a>
        </div>
      </div>
    </header>
  )
}
