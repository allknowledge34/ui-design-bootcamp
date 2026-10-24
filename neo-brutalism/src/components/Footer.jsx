function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="neo-footer">
      <div className="neo-container footer-content-row">
        <div className="footer-brand-side">
          <div className="neo-brand">
            <span className="brand-dot-box">
              <span className="dot-inner"></span>
            </span>
            <span className="brand-title">TRALANCE</span>
          </div>
          <p className="footer-tagline">
            Neo-Brutalist freelance income &amp; expense tracking for independent operators.
          </p>
        </div>

        <nav className="footer-nav-links" aria-label="Footer navigation">
          <a href="#home" className="footer-link">HOME</a>
          <a href="#preview" className="footer-link">PREVIEW</a>
          <a href="#features" className="footer-link">FEATURES</a>
          <a href="#how-it-works" className="footer-link">HOW IT WORKS</a>
          <a href="#download" className="footer-link">DOWNLOAD</a>
        </nav>

        <div className="footer-action-side">
          <button type="button" onClick={scrollToTop} className="neo-btn footer-top-btn" aria-label="Back to top">
            <span>BACK TO TOP</span>
            <span aria-hidden="true">&uarr;</span>
          </button>
        </div>
      </div>

      <div className="neo-container footer-sub-row">
        <span>&copy; {new Date().getFullYear()} TRALANCE. ALL RIGHTS RESERVED.</span>
        <span>NEO-BRUTALISM UI SYSTEM // VERIFIED</span>
      </div>
    </footer>
  )
}

export default Footer
