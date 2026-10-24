export function Hero({ onOpenModal }) {
  return (
    <section className="hero-section">
      <div className="editorial-container">
        <div className="hero-spread-grid">
          <div className="hero-editorial-col">
            <div className="hero-masthead-tag">
              <span className="editorial-meta-tag editorial-meta-vermilion">ATELIER FOLIO 01</span>
              <span style={{ color: 'var(--border-rule)' }}>|</span>
              <span className="editorial-meta-tag">DISCIPLINE // DIGITAL SYSTEMS &amp; INTERFACES</span>
            </div>

            <h1 className="hero-headline">
              Art-directed digital platforms engineered with <em>editorial precision</em>.
            </h1>

            <p className="hero-support-sentence">
              Verve Atelier constructs bespoke software systems, typography-driven web platforms, and digital identities for culture, architecture, and progressive commerce.
            </p>

            <div className="hero-action-row">
              <a href="#work" className="editorial-btn editorial-btn-dark">
                <span>Explore Selected Folio</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <button
                type="button"
                className="editorial-btn editorial-btn-outline"
                onClick={() => onOpenModal('Studio Engagement')}
              >
                <span>Initiate Dialogue</span>
              </button>
            </div>
          </div>

          <div className="hero-visual-frame" aria-hidden="true">
            <div className="hero-image-canvas">
              <div className="hero-canvas-art">
                <svg width="80%" height="80%" viewBox="0 0 320 400" fill="none">
                  <rect x="20" y="20" width="280" height="360" stroke="#121110" strokeWidth="1.5" />
                  <line x1="20" y1="140" x2="300" y2="140" stroke="#121110" strokeWidth="1" />
                  <line x1="20" y1="260" x2="300" y2="260" stroke="#121110" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="160" y1="20" x2="160" y2="380" stroke="#121110" strokeWidth="1" />
                  <circle cx="160" cy="140" r="50" stroke="#D0382B" strokeWidth="2" fill="none" />
                  <circle cx="160" cy="140" r="4" fill="#D0382B" />
                  <text x="35" y="55" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="800" fill="#121110" letterSpacing="0.1em">FIG. 01</text>
                  <text x="35" y="72" fontFamily="Inter, sans-serif" fontSize="9" fill="#7A756D" letterSpacing="0.08em">SYSTEM MATRIX</text>
                  <text x="175" y="360" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#121110">ATELIER ED. 2026</text>
                </svg>
              </div>
            </div>
            <div className="hero-canvas-label">
              <span>PLATE NO. 01 — FORM &amp; FUNCTION</span>
              <span className="editorial-meta-vermilion">VERVE ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
