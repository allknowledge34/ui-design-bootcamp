import { useState } from 'react'

export function Navbar({ theme, onToggleTheme, onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Studio', href: '#about' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="retro-container navbar-inner">
        <a href="#" className="brand-link">
          <div className="brand-emblem" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8Z" fill="currentColor" />
            </svg>
          </div>
          <div className="brand-title-group">
            <span className="brand-name">Northstar</span>
            <span className="brand-sub">Software Studio</span>
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

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle retro color scheme"
            title={theme === 'dark' ? 'Switch to warm light paper' : 'Switch to espresso night mode'}
          >
            {theme === 'dark' ? (
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

          <button
            type="button"
            className="retro-btn retro-btn-primary"
            onClick={() => onOpenModal('General Inquiry')}
          >
            <span>Initiate Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
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
          className="retro-btn retro-btn-primary"
          style={{ width: '100%', marginTop: '12px' }}
          onClick={() => {
            setMobileOpen(false)
            onOpenModal('General Inquiry')
          }}
        >
          Initiate Project
        </button>
      </div>
    </header>
  )
}
