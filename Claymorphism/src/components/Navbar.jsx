import { useState } from 'react'
import { Sun, Moon, Menu, X, Wallet } from 'lucide-react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Download', href: '#download' },
  ]

  return (
    <header className="clay-header">
      <div className="clay-nav-bar">
        <a href="#home" className="clay-brand" aria-label="Tralance home">
          <div className="clay-icon-socket brand-socket">
            <Wallet size={16} />
          </div>
          <span className="clay-brand-text">TRALANCE</span>
        </a>

        <nav className="clay-nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="clay-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="clay-nav-actions">
          <button
            className="clay-circle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <a href="#download" className="clay-btn-coral nav-coral-btn">
            <span>GET STARTED</span>
          </a>

          <button
            className="clay-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`clay-mobile-drawer ${menuOpen ? 'is-active' : ''}`} aria-hidden={!menuOpen}>
        <div className="clay-drawer-card">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="clay-drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="clay-btn-coral mobile-cta-btn"
            onClick={() => setMenuOpen(false)}
          >
            <span>GET STARTED</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
