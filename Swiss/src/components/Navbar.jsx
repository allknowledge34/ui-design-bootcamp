import { useState } from 'react'

export function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="swiss-navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand" aria-label="Tralance Home">
          <span>TRALANCE</span>
          <span className="brand-accent-box" aria-hidden="true" />
        </a>

        <nav className="navbar-nav-links" aria-label="Main Navigation">
          <a href="#overview" className="nav-item-link">
            <span className="nav-item-index">01</span> Overview
          </a>
          <a href="#architecture" className="nav-item-link">
            <span className="nav-item-index">02</span> Architecture
          </a>
          <a href="#capabilities" className="nav-item-link">
            <span className="nav-item-index">03</span> Capabilities
          </a>
          <a href="#preview" className="nav-item-link">
            <span className="nav-item-index">04</span> Preview
          </a>
          <a href="#matrix" className="nav-item-link">
            <span className="nav-item-index">05</span> Matrix
          </a>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href="#download" className="swiss-btn swiss-btn-primary">
            <span>GET APP</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-list">
          <a href="#overview" className="mobile-nav-item" onClick={handleNavClick}>
            <span className="nav-item-index">01</span> Overview
          </a>
          <a href="#architecture" className="mobile-nav-item" onClick={handleNavClick}>
            <span className="nav-item-index">02</span> Architecture
          </a>
          <a href="#capabilities" className="mobile-nav-item" onClick={handleNavClick}>
            <span className="nav-item-index">03</span> Capabilities
          </a>
          <a href="#preview" className="mobile-nav-item" onClick={handleNavClick}>
            <span className="nav-item-index">04</span> Preview
          </a>
          <a href="#matrix" className="mobile-nav-item" onClick={handleNavClick}>
            <span className="nav-item-index">05</span> Matrix
          </a>
          <a href="#download" className="mobile-nav-item" onClick={handleNavClick} style={{ color: 'var(--swiss-red)' }}>
            <span className="nav-item-index">06</span> Download Application
          </a>
        </div>
      </div>
    </header>
  )
}
