import { useState } from 'react'
import { Sun, Moon, Menu, X, Wallet, Download } from 'lucide-react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Management', href: '#management' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header className="neu-header">
      <div className="neu-nav-bar">
        <a href="#home" className="neu-brand" aria-label="Tralance home">
          <div className="neu-icon-circle-raised">
            <Wallet size={18} className="neu-brand-icon" />
          </div>
          <span className="neu-brand-text">Tralance</span>
        </a>

        <nav className="neu-nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="neu-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="neu-nav-actions">
          <button
            className="neu-circle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <a href="#download" className="neu-btn-black">
            <span>Download Now</span>
            <Download size={14} />
          </a>

          <button
            className="neu-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`neu-mobile-drawer ${menuOpen ? 'is-active' : ''}`} aria-hidden={!menuOpen}>
        <div className="neu-drawer-content">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="neu-drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="neu-btn-black mobile-cta-btn"
            onClick={() => setMenuOpen(false)}
          >
            <span>Download Now</span>
            <Download size={14} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
