import { useState } from 'react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Overview', href: '#home' },
    { label: 'Preview', href: '#preview' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ]

  return (
    <header className="neo-header">
      <div className="neo-container nav-inner">
        <a href="#home" className="neo-brand" aria-label="Tralance home">
          <span className="brand-dot-box">
            <span className="dot-inner"></span>
          </span>
          <span className="brand-title">TRALANCE</span>
        </a>

        <nav className="neo-nav-menu" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link-pill">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions-cluster">
          <button
            type="button"
            className="neo-btn neo-theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            <span className="theme-indicator-square"></span>
            <span>{theme === 'light' ? 'DARK' : 'LIGHT'}</span>
          </button>

          <a href="#download" className="neo-btn btn-accent nav-cta-btn">
            <span>DOWNLOAD NOW</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>

          <button
            type="button"
            className="neo-btn mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`neo-mobile-drawer ${menuOpen ? 'is-active' : ''}`}>
        <div className="mobile-drawer-box">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="drawer-nav-item"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="neo-btn btn-accent drawer-cta-item"
            onClick={() => setMenuOpen(false)}
          >
            DOWNLOAD NOW &rarr;
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
