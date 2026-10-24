export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer id="contact" className="md-footer">
      <div className="md-container">
        <div className="footer-curved-card">
          <div className="footer-top-grid">
            <div className="footer-col-block">
              <span className="footer-col-heading">GET IN TOUCH</span>
              <p className="footer-col-text">5th Street, 21st Floor, New York, USA</p>
              <p className="footer-col-text" style={{ fontWeight: '700', color: 'var(--md-text-primary)' }}>contact@northstardigital.com</p>
              <p className="footer-col-text" style={{ fontWeight: '700', color: 'var(--md-purple)' }}>+1-234-567-8900</p>
            </div>

            <div className="footer-col-block">
              <span className="footer-col-heading">INFORMATION</span>
              <ul className="footer-nav-list">
                <li><a href="#services">About Us</a></li>
                <li><a href="#pricing">FAQ</a></li>
                <li><a href="#services">Team Member</a></li>
                <li><a href="#services">Portfolio One</a></li>
                <li><a href="#pricing">Price Table</a></li>
              </ul>
            </div>

            <div className="footer-col-block">
              <span className="footer-col-heading">SERVICES</span>
              <ul className="footer-nav-list">
                <li><a href="#services">Software Design</a></li>
                <li><a href="#services">Data Security</a></li>
                <li><a href="#services">App Integration</a></li>
                <li><a href="#services">Social Marketing</a></li>
                <li><a href="#services">Development</a></li>
              </ul>
            </div>

            <div className="footer-col-block">
              <span className="footer-col-heading">SUBSCRIBE OUR NEWSLETTER</span>
              <p className="footer-col-text">
                Receive our latest engineering whitepapers, architectural case studies, and service updates.
              </p>
              <form onSubmit={handleSubmit} className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="newsletter-field"
                  aria-label="Your Email Address"
                  required
                />
                <button type="submit" className="md-btn-purple" style={{ padding: '0.625rem 1.125rem', fontSize: '0.8125rem' }}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom-row">
            <span>&copy; {new Date().getFullYear()} Northstar Digital. All Rights Reserved.</span>
            <span>Material Design Agency Edition</span>
            <button type="button" onClick={scrollToTop} style={{ fontWeight: '700', color: 'var(--md-purple)' }}>
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
