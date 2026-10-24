import { Zap, ArrowUp } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="max-footer-root">
      <div className="footer-giant-watermark" aria-hidden="true">
        TRALANCE
      </div>

      <div className="max-container footer-content-wrap">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-brand-lockup">
              <div className="footer-brand-icon">
                <Zap size={22} strokeWidth={3} />
              </div>
              <span className="footer-brand-name">TRALANCE</span>
            </div>
            <p className="footer-brand-mission">
              The high-octane freelance financial command center. Built strictly for independent contractors, consultants, and creators who demand absolute clarity over their cashflow.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot-pulse"></span>
              <span>ALL SYSTEMS OPERATIONAL • LOCAL ENCRYPTED</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">PRODUCT</h4>
            <ul className="footer-nav-list">
              <li><a href="#overview" className="footer-link-item">Overview</a></li>
              <li><a href="#features" className="footer-link-item">Income Velocity</a></li>
              <li><a href="#features" className="footer-link-item">Tax Deduction Shield</a></li>
              <li><a href="#bills" className="footer-link-item">Bills & Recurring Outflows</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">WORKFLOW</h4>
            <ul className="footer-nav-list">
              <li><a href="#workflow" className="footer-link-item">Client Matrix Setup</a></li>
              <li><a href="#workflow" className="footer-link-item">Milestone Logging</a></li>
              <li><a href="#features" className="footer-link-item">Payment Status Radar</a></li>
              <li><a href="#get-started" className="footer-link-item">Mobile Applications</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">GET STARTED</h4>
            <ul className="footer-nav-list">
              <li><a href="#get-started" className="footer-link-item">Download iOS App</a></li>
              <li><a href="#get-started" className="footer-link-item">Download Android App</a></li>
              <li><a href="#get-started" className="footer-link-item">Web Companion</a></li>
              <li><a href="#get-started" className="footer-link-item">Release Notes v2.4</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copy-left">
            <span>&copy; {new Date().getFullYear()} Tralance Inc. All rights reserved. Crafted for the independent hustle.</span>
          </div>

          <div className="footer-actions-right">
            <button onClick={scrollToTop} className="btn-back-to-top" aria-label="Back to top of page">
              <span>BACK TO TOP</span>
              <ArrowUp size={16} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
