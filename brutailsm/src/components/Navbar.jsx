import { useState } from 'react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'HOME', href: '#home' },
    { label: 'FEATURES', href: '#features' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'SHOWCASE', href: '#showcase' },
  ]

  return (
    <header className="brutal-header">
      <div className="brutal-container nav-container">
        <a href="#home" className="brutal-brand">
          <span className="brand-square"></span>
          <span className="brand-name">TRALANCE</span>
        </a>

        <nav className="brutal-nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="brutal-theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? 'THEME: DARK' : 'THEME: LIGHT'}
          </button>

          <a href="#download" className="brutal-btn btn-primary nav-cta">
            DOWNLOAD APP
          </a>

          <button
            type="button"
            className="brutal-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      <div className={`brutal-mobile-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-inner">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="brutal-btn btn-primary mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            DOWNLOAD APP
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
