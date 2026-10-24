import { useState } from 'react'

export function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Heritage', href: '#story' },
    { label: 'Atelier', href: '#detail' },
    { label: 'Acquisitions', href: '#inquire' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="victorian-container navbar-inner">
        <a href="#" className="brand-royal-wrap">
          <div className="brand-crest-box" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.5 8L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8Z" stroke="#E5CCA2" strokeWidth="1.2" fill="#3B0D18" />
              <circle cx="12" cy="12" r="2.5" fill="#E5CCA2" />
            </svg>
          </div>
          <div className="brand-names-group">
            <span className="brand-royal-title">ROYAL HERITAGE</span>
            <span className="brand-royal-sub">EST. 1887 &bull; LONDON</span>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            type="button"
            className="victorian-btn victorian-btn-gold"
            onClick={() => onOpenModal('General Atelier Viewing')}
          >
            <span>PRIVATE VIEWING</span>
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

      <div className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`}>
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
          className="victorian-btn victorian-btn-gold"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={() => {
            setMobileOpen(false)
            onOpenModal('General Atelier Viewing')
          }}
        >
          PRIVATE VIEWING
        </button>
      </div>
    </header>
  )
}
