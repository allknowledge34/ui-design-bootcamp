import { HeroVectorArt } from './VectorArtAssets';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="pill-badge cobalt">Independent Vector Studio</span>
            <h1 className="hero-headline">
              Ideas, drawn <span className="accent-coral">differently.</span>
            </h1>
            <p className="hero-description">
              Form &amp; Fable crafts brand identities, editorial illustrations, and visual campaigns through pure geometric precision, deliberate color blocking, and vector storytelling.
            </p>
            <div className="hero-ctas">
              <a href="#work" className="btn btn-primary">
                View Selected Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={onOpenInquiry}
              >
                Inquire for 2026
              </button>
            </div>

            <div className="hero-meta-bar">
              <div className="hero-meta-item">
                <span className="hero-meta-value">100%</span>
                <span className="hero-meta-label">Bespoke Vector Craft</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-value">2 Locations</span>
                <span className="hero-meta-label">Stockholm &amp; Brooklyn</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-value">0 Templates</span>
                <span className="hero-meta-label">Uncompromised Design</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-frame">
            <div className="hero-art-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Original SVG Canvas
            </div>
            <HeroVectorArt />
          </div>
        </div>
      </div>
    </section>
  );
}
