import { useState } from 'react'
import { Sun, Moon, Menu, X, ArrowUpRight, Zap } from 'lucide-react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Bills & Invoicing', href: '#bills' },
  ]

  return (
    <header className="max-nav-wrapper">
      <div className="max-nav-container">
        <a href="#" className="max-brand" aria-label="Tralance home">
          <div className="max-brand-icon">
            <Zap size={20} strokeWidth={2.8} />
          </div>
          <span className="max-brand-text">TRALANCE</span>
          <span className="max-brand-tag">PRO v2.4</span>
        </a>

        <nav className="max-nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="max-nav-item">
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="max-nav-actions">
          <button
            className="max-theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} strokeWidth={2.5} /> : <Sun size={18} strokeWidth={2.5} />}
            <span className="theme-text-pill">{theme === 'light' ? 'NIGHT' : 'DAY'}</span>
          </button>

          <a href="#get-started" className="max-btn-cta">
            <span>START FREE</span>
            <ArrowUpRight size={16} strokeWidth={3} />
          </a>

          <button
            className="max-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      <div className={`max-mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="max-mobile-content">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="max-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a
            href="#get-started"
            className="max-btn-cta mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <span>LAUNCH TRALANCE FREE</span>
            <ArrowUpRight size={18} strokeWidth={3} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
