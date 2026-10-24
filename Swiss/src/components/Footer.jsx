export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="swiss-footer">
      <div className="footer-top-grid">
        <div className="footer-brand-column">
          <div className="footer-brand-title">
            <span>TRALANCE</span>
            <span className="brand-accent-box" aria-hidden="true" />
          </div>
          <p className="footer-brand-sub">
            The deliberate, offline-first income and expense tracking operating system for independent freelancers and contractors.
          </p>
          <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            SWISS INTERNATIONAL TYPOGRAPHIC EDITION
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-nav-col">
            <span className="footer-col-header">01 / SYSTEM</span>
            <ul className="footer-col-links">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#matrix">Domain Matrix</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-header">02 / CAPABILITIES</span>
            <ul className="footer-col-links">
              <li><a href="#capabilities">Income Logging</a></li>
              <li><a href="#capabilities">Project Attribution</a></li>
              <li><a href="#capabilities">Receivables Radar</a></li>
              <li><a href="#preview">Interface Frame</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-header">03 / SOVEREIGNTY</span>
            <ul className="footer-col-links">
              <li><a href="#architecture">Local-First Storage</a></li>
              <li><a href="#overview">Zero Telemetry Pledge</a></li>
              <li><a href="#download">Android Distribution</a></li>
              <li><a href="#top">Back to Index</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>&copy; {new Date().getFullYear()} TRALANCE. ALL RIGHTS RESERVED.</span>
        <span>VERSION 1.0.0 // ANDROID // ZERO TRACKING</span>
        <button type="button" onClick={scrollToTop} className="footer-back-top" aria-label="Scroll back to top">
          <span>TOP</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
