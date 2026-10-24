export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bento-footer">
      <div className="bento-container">
        <div className="footer-bento-grid">
          <div className="footer-col-nav">
            <div className="navbar-brand-group">
              <div className="brand-icon-box">T</div>
              <span>Tralance</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '320px', lineHeight: 1.6 }}>
              The deliberate, offline-first personal finance platform built for independent freelancers and contractors.
            </p>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              BENTO GRID UI EDITION // ANDROID NATIVE
            </div>
          </div>

          <div className="footer-col-nav">
            <span className="footer-nav-title">Navigation</span>
            <ul className="footer-nav-list">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#workflow">Workflow</a></li>
              <li><a href="#preview">Interface Frame</a></li>
            </ul>
          </div>

          <div className="footer-col-nav">
            <span className="footer-nav-title">Modules</span>
            <ul className="footer-nav-list">
              <li><a href="#features">Income &amp; Expense</a></li>
              <li><a href="#features">Project Attribution</a></li>
              <li><a href="#features">Receivables Radar</a></li>
              <li><a href="#showcase">Runway Forecaster</a></li>
            </ul>
          </div>

          <div className="footer-col-nav">
            <span className="footer-nav-title">Privacy</span>
            <ul className="footer-nav-list">
              <li><a href="#showcase">Offline Sovereignty</a></li>
              <li><a href="#overview">Zero Telemetry</a></li>
              <li><a href="#download">Android Play Store</a></li>
              <li><a href="#top">Back to Top</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-flex">
          <span>&copy; {new Date().getFullYear()} Tralance. All rights reserved.</span>
          <span>Version 1.0.0 // Android Native</span>
          <button type="button" onClick={scrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
