export function HeroBanner({ onOpenModal }) {
  return (
    <section className="hero-section">
      <div className="hero-pattern-overlay" aria-hidden="true" />
      <div className="retro-container hero-content">
        <div className="hero-badge-wrap">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Studio Established 1984 &bull; Resilient Software Craft</span>
        </div>

        <h1 className="hero-headline">
          Enduring software engineered for <span className="hero-headline-italic">ambitious enterprises</span>.
        </h1>

        <p className="hero-description">
          Northstar Digital designs and constructs resilient software systems, bulletproof cloud architectures, and high-performance native applications built to endure for decades.
        </p>

        <div className="hero-actions">
          <a href="#services" className="retro-btn retro-btn-primary">
            <span>Explore Services</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>

          <button
            type="button"
            className="retro-btn retro-btn-secondary"
            onClick={() => onOpenModal('Architecture Review')}
          >
            <span>Schedule Architecture Review</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </button>
        </div>

        <div className="hero-credentials">
          <div className="credential-item">
            <svg className="credential-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>SOC2 Type II Aligned</span>
          </div>

          <div className="credential-item">
            <svg className="credential-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>100% IP & Source Ownership</span>
          </div>

          <div className="credential-item">
            <svg className="credential-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Senior-Only Engineering Roster</span>
          </div>

          <div className="credential-item">
            <svg className="credential-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Zero Vendor Lock-In</span>
          </div>
        </div>
      </div>

      <div className="hero-curve-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" className="shape-fill" />
        </svg>
      </div>
    </section>
  )
}
