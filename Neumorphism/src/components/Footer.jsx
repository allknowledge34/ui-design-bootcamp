import { Wallet, ArrowUp } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="neu-footer">
      <div className="neu-container footer-flex-wrap">
        <div className="footer-brand-side">
          <div className="neu-brand">
            <div className="neu-icon-circle-raised">
              <Wallet size={16} className="neu-brand-icon" />
            </div>
            <span className="neu-brand-text">Tralance</span>
          </div>
          <p className="footer-tagline">
            Simple freelance income and expense tracking.
          </p>
        </div>

        <nav className="footer-links-row" aria-label="Footer navigation">
          <a href="#home" className="footer-nav-link">Home</a>
          <a href="#features" className="footer-nav-link">Features</a>
          <a href="#management" className="footer-nav-link">Management</a>
          <a href="#reviews" className="footer-nav-link">Reviews</a>
        </nav>

        <div className="footer-actions-side">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Tralance. All rights reserved.
          </span>
          <button onClick={scrollToTop} className="neu-circle-btn" aria-label="Back to top">
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
