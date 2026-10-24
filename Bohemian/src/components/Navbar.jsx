import { useState } from 'react'

export function Navbar({ cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Our Story', href: '#story' },
    { label: 'Artisan Showcase', href: '#showcase' },
    { label: 'Atelier Note', href: '#atelier' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="boho-container navbar-inner">
        <a href="#" className="brand-link-wrap">
          <div className="brand-emblem-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#C86D51" />
              <circle cx="12" cy="12" r="4" fill="#D99B4B" />
            </svg>
          </div>
          <div className="brand-title-group">
            <span className="brand-title">SOULFUL LIVING</span>
            <span className="brand-sub">Handmade &bull; Slow Craft</span>
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
            className="cart-toggle-pill"
            onClick={onOpenCart}
            aria-label="View shopping basket"
          >
            <span>BASKET</span>
            <span className="cart-badge-dot">{cartCount}</span>
          </button>

          <a href="#collections" className="boho-btn boho-btn-terracotta" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            SHOP NOW
          </a>

          <button
            type="button"
            className="mobile-menu-trigger"
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
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
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
        <a
          href="#collections"
          className="boho-btn boho-btn-terracotta"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={() => setMobileOpen(false)}
        >
          SHOP NOW
        </a>
      </div>
    </header>
  )
}
