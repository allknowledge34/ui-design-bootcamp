function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="brutal-footer">
      <div className="brutal-container footer-content-grid">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-square"></span>
            <span className="brand-name">TRALANCE</span>
          </div>
          <p className="footer-tagline">
            Brutalist income and expense tracking built strictly for independent operators.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home" className="footer-link">HOME</a>
          <a href="#features" className="footer-link">FEATURES</a>
          <a href="#how-it-works" className="footer-link">HOW IT WORKS</a>
          <a href="#showcase" className="footer-link">SHOWCASE</a>
          <a href="#download" className="footer-link">DOWNLOAD</a>
        </nav>

        <div className="footer-actions">
          <button type="button" onClick={scrollToTop} className="brutal-btn btn-secondary back-to-top-btn">
            BACK TO TOP &uarr;
          </button>
        </div>
      </div>

      <div className="brutal-container footer-bottom">
        <span>&copy; {new Date().getFullYear()} TRALANCE. ALL RIGHTS RESERVED.</span>
        <span>DESIGN SYSTEM: PURE BRUTALISM</span>
      </div>
    </footer>
  )
}

export default Footer
