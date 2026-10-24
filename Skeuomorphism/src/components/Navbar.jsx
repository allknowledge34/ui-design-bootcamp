import { useState } from 'react'

export function Navbar({ theme, onToggleTheme, onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Studio', href: '#studio' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="skeuo-container navbar-inner">
        <a href="#" className="brand-wrap">
          <div className="brand-seal-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M12 4L13.8 9.5L19.5 11.2L14.2 13.5L12 19.5L10.2 13.5L4.5 11.2L10.2 9.5Z" fill="currentColor" />
            </svg>
          </div>
          <div className="brand-text-col">
            <span className="brand-name">Northstar</span>
            <span className="brand-sub">Digital Agency</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-controls">
          <button
            type="button"
            className="tactile-theme-switch"
            onClick={onToggleTheme}
            aria-label="Toggle light or dark theme"
            title={theme === 'dark' ? 'Switch to daylight paper' : 'Switch to evening leather desk'}
          >
            <div className="tactile-theme-knob">
              {theme === 'dark' ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              )}
            </div>
          </button>

          <button
            type="button"
            className="skeuo-btn skeuo-btn-primary"
            onClick={() => onOpenModal('General Consultation')}
          >
            <span>Initiate Project</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation drawer"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-tray ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="skeuo-btn skeuo-btn-primary"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={() => {
            setMobileOpen(false)
            onOpenModal('General Consultation')
          }}
        >
          Initiate Project
        </button>
      </div>
    </header>
  )
}
