import { useState } from 'react'
import { Sun, Moon, Menu, X, ArrowDownRight } from 'lucide-react'

function Nav({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#' },
    { label: 'About us', href: '#features' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
  ]

  return (
    <header className="nav" role="banner">
      <div className="container nav-inner">
        <a href="#" className="nav-brand" aria-label="Tralance home">
          <svg className="brand-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a4 4 0 0 1 4 4c0 1.6-.9 3-2.3 3.7.8.4 1.8 1.3 2.3 2.3A4 4 0 1 1 12 16a4 4 0 0 1-4-4c0-1 .5-2 1.3-2.7C7.9 8.6 7 7.2 7 6a4 4 0 0 1 5-4z"/>
          </svg>
          <span className="brand-name">Tralance</span>
        </a>

        <nav className="nav-center" aria-label="Main navigation">
          <ul className="nav-links">
            {links.map(link => (
              <li key={link.label}>
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="btn-pill-download" href="#get-started">
            <span>Download Now</span>
            <span className="pill-badge" aria-hidden="true">
              <ArrowDownRight size={14} strokeWidth={2.5} />
            </span>
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {links.map(link => (
          <a
            key={link.label}
            className="mobile-nav-link"
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="btn-pill-download mobile-nav-cta"
          href="#get-started"
          onClick={() => setMenuOpen(false)}
        >
          <span>Download Now</span>
          <span className="pill-badge" aria-hidden="true">
            <ArrowDownRight size={14} strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </header>
  )
}

export default Nav
