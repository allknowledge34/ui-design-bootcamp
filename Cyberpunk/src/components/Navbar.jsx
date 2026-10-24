import { useState } from 'react'

export function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="cyber-container navbar-inner">
        <a href="#" className="brand-hud">
          <div className="brand-icon-box" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="3" fill="#FF007F" />
              <line x1="12" y1="2" x2="12" y2="6" stroke="#00F0FF" strokeWidth="1.5" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="#00F0FF" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">KROM<em>//</em>LABS</span>
            <span className="brand-sub">Neural Engineering</span>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            className="cyber-btn cyber-btn-cyan"
            onClick={() => onOpenModal('Uplink Request')}
          >
            <span>Initiate Uplink</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
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
          className="cyber-btn cyber-btn-cyan"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={() => {
            setMobileOpen(false)
            onOpenModal('Uplink Request')
          }}
        >
          Initiate Uplink
        </button>
      </div>
    </header>
  )
}
