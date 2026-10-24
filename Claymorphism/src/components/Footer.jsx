import { Wallet } from 'lucide-react'

function Footer() {
  return (
    <footer className="clay-footer">
      <div className="clay-container footer-clean-grid">
        <div className="footer-left-brand">
          <div className="clay-brand">
            <div className="clay-icon-socket brand-socket">
              <Wallet size={16} />
            </div>
            <span className="clay-brand-text">TRALANCE</span>
          </div>
        </div>

        <nav className="footer-center-links" aria-label="Footer links">
          <a href="#home" className="footer-nav-link">Home</a>
          <a href="#features" className="footer-nav-link">Features</a>
          <a href="#how-it-works" className="footer-nav-link">How It Works</a>
          <a href="#reviews" className="footer-nav-link">Reviews</a>
          <a href="#download" className="footer-nav-link">Download</a>
        </nav>

        <div className="footer-tagline-col">
          <span className="footer-tagline-text">Simple tools for modern freelance money.</span>
        </div>

        <div className="footer-socials-col">
          <span className="footer-copy-inline">&copy; {new Date().getFullYear()} Tralance. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
