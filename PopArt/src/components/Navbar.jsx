import { useState } from 'react'

export function Navbar({ cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Manifesto', href: '#statement' },
    { label: 'Drops', href: '#drops' },
    { label: 'VIP Club', href: '#vip' },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="pop-container navbar-inner">
        <a href="#" className="brand-pop-link">
          <span className="brand-dot-badge" aria-hidden="true" />
          <span>POP STORE</span>
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

        <div className="nav-action-group">
          <button
            type="button"
            className="cart-icon-btn"
            onClick={onOpenCart}
            aria-label="Open cart drawer"
          >
            <span>BAG</span>
            <span className="cart-counter">{cartCount}</span>
          </button>

          <a href="#collection" className="pop-btn pop-btn-red" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
            SHOP NOW!
          </a>

          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation drawer"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-pop-drawer ${mobileOpen ? 'open' : ''}`}>
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
          href="#collection"
          className="pop-btn pop-btn-red"
          style={{ width: '100%', marginTop: '6px' }}
          onClick={() => setMobileOpen(false)}
        >
          SHOP NOW!
        </a>
      </div>
    </header>
  )
}
