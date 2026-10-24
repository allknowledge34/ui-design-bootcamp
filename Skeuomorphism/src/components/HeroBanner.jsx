export function HeroBanner({ onOpenModal }) {
  return (
    <section className="hero-area">
      <div className="hero-stitched-border" aria-hidden="true" />
      <div className="skeuo-container hero-body-wrap">
        <div className="hero-badge-plate">
          <span className="skeuo-rivet" aria-hidden="true" />
          <span className="hero-plate-text">Studio Established 1984 &bull; Tangible Digital Craft</span>
          <span className="skeuo-rivet" aria-hidden="true" />
        </div>

        <h1 className="hero-headline">
          Enduring software crafted with <em>physical precision</em>.
        </h1>

        <p className="hero-lead-text">
          Northstar Digital constructs resilient web platforms, native mobile applications, and hardened data architectures with timeless engineering principles.
        </p>

        <div className="hero-cta-group">
          <a href="#services" className="skeuo-btn skeuo-btn-primary">
            <span>Explore Services</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>

          <button
            type="button"
            className="skeuo-btn skeuo-btn-secondary"
            onClick={() => onOpenModal('Architecture Consultation')}
          >
            <span>Schedule Consultation</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hero-lower-curve" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C180,95 380,-30 550,55 C700,130 960,15 1200,60 L1200,120 L0,120 Z" className="curve-fill" />
        </svg>
      </div>
    </section>
  )
}
