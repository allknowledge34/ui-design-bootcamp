import { useState } from 'react'
import { Sun, Moon, Menu, X, ArrowRight, Wallet } from 'lucide-react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#how-it-works' },
    { label: 'Support', href: '#showcase' },
  ]

  return (
    <header className="site-header">
      <div className="nav-container">
        <a href="#" className="brand-lockup" aria-label="Tralance home">
          <div className="brand-squircle">
            <Wallet size={18} className="brand-squircle-icon" />
          </div>
          <span className="brand-text">Tralance</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-text-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta-group">
          <button
            className="theme-glass-pill"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            <span className="theme-pill-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>

          <a href="#get-started" className="btn-black-pill">
            <span>Get the App</span>
          </a>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-glass-drawer ${menuOpen ? 'is-active' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-drawer-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.label}</span>
              <ArrowRight size={15} />
            </a>
          ))}
          <a
            href="#get-started"
            className="btn-black-pill mobile-drawer-cta"
            onClick={() => setMenuOpen(false)}
          >
            <span>Get the App</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
