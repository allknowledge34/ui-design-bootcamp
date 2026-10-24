export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="flat-footer-area">
      <div className="flat-container">
        <div className="footer-top-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '1.25rem', fontWeight: 900 }}>
            <span>Tralance</span>
            <span className="brand-dot" aria-hidden="true" />
          </div>

          <div className="footer-nav-items">
            <a href="#features" className="nav-text-link">Services</a>
            <a href="#stats" className="nav-text-link">How it works</a>
            <a href="#comprehensive" className="nav-text-link">About us</a>
            <a href="#preview" className="nav-text-link">Features</a>
            <a href="#quote" className="nav-text-link">Overview</a>
          </div>
        </div>

        <div className="footer-copyright-row">
          <span>&copy; {new Date().getFullYear()} Tralance. All rights reserved.</span>
          <span>Flat Design Edition // Android Native</span>
          <button type="button" onClick={scrollToTop} style={{ fontWeight: 700, color: 'var(--flat-purple)' }}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
