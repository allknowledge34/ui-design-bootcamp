import { useState } from 'react'

export function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="flat-navbar">
      <div className="flat-container">
        <div className="navbar-row">
          <nav className="nav-links-left" aria-label="Secondary Navigation">
            <a href="#features" className="nav-text-link">Services</a>
            <a href="#stats" className="nav-text-link">How it works</a>
            <a href="#comprehensive" className="nav-text-link">About us</a>
          </nav>

          <a href="#top" className="navbar-brand-center" aria-label="Tralance Home">
            <span>Tralance</span>
            <span className="brand-dot" aria-hidden="true" />
          </a>

          <div className="nav-links-right">
            <a href="#preview" className="nav-text-link">Features</a>
            <a href="#quote" className="nav-text-link">Overview</a>

            <button
              type="button"
              className="theme-round-btn"
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

            <a href="#preview" className="pill-pink-btn" style={{ padding: '0.625rem 1.25rem', fontSize: '0.8125rem' }}>
              <span>Get Tralance</span>
              <span>→</span>
            </a>

            <button
              type="button"
              className="mobile-menu-btn"
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

        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
          <a href="#features" className="nav-text-link" onClick={handleNavClick}>Services</a>
          <a href="#stats" className="nav-text-link" onClick={handleNavClick}>How it works</a>
          <a href="#comprehensive" className="nav-text-link" onClick={handleNavClick}>About us</a>
          <a href="#preview" className="nav-text-link" onClick={handleNavClick}>Features</a>
          <a href="#quote" className="nav-text-link" onClick={handleNavClick}>Overview</a>
          <a href="#preview" className="pill-pink-btn" onClick={handleNavClick}>
            <span>Get Tralance</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
