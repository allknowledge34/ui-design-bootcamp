import { useState } from 'react'

export function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="editorial-container navbar-inner">
        <a href="#" className="brand-block">
          <span className="brand-title">VERVE ATELIER</span>
          <span className="brand-tag">VOL. 24</span>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            type="button"
            className="editorial-btn editorial-btn-dark"
            onClick={() => onOpenModal('General Inquiry')}
          >
            <span>Initiate Inquiry</span>
          </button>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
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

      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
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
          className="editorial-btn editorial-btn-dark"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={() => {
            setMobileOpen(false)
            onOpenModal('General Inquiry')
          }}
        >
          Initiate Inquiry
        </button>
      </div>
    </header>
  )
}
