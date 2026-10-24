function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <svg className="brand-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a4 4 0 0 1 4 4c0 1.6-.9 3-2.3 3.7.8.4 1.8 1.3 2.3 2.3A4 4 0 1 1 12 16a4 4 0 0 1-4-4c0-1 .5-2 1.3-2.7C7.9 8.6 7 7.2 7 6a4 4 0 0 1 5-4z"/>
            </svg>
            <span className="brand-name">Tralance</span>
          </div>
          <span className="footer-copy">&copy; {new Date().getFullYear()} Tralance Inc. All rights reserved.</span>
        </div>

        <ul className="footer-links">
          <li><a className="footer-link" href="#">Home</a></li>
          <li><a className="footer-link" href="#features">Features</a></li>
          <li><a className="footer-link" href="#how-it-works">How it works</a></li>
          <li><a className="footer-link" href="#get-started">Download</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
