export function Hero() {
  return (
    <section className="hero-section">
      <div className="boho-container">
        <div className="hero-boho-grid">
          <div className="hero-editorial-col">
            <span className="boho-badge-pill" style={{ marginBottom: '20px' }}>
              ✦ NEW SEASON SLOW LIVING DROP
            </span>

            <h1 className="hero-headline">
              HANDMADE FOR A <em>BRIGHTER</em> EVERYDAY.
            </h1>

            <p className="hero-subtext">
              Artisanal ceramics, hand-loomed textiles, and botanical living accents crafted slowly by independent makers using natural earth pigments and honest fibers.
            </p>

            <div className="hero-cta-group">
              <a href="#collections" className="boho-btn boho-btn-terracotta">
                <span>SHOP THE COLLECTION</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a href="#story" className="boho-btn boho-btn-outline">
                <span>OUR PHILOSOPHY</span>
              </a>
            </div>
          </div>

          <div className="hero-visual-col" aria-hidden="true">
            <div className="hero-arch-stage">
              <div className="hero-terracotta-sun" />
              <svg width="80%" height="80%" viewBox="0 0 300 360" fill="none">
                <path d="M40 320V160C40 93.7 93.7 40 160 40C226.3 40 280 93.7 280 160V320H40Z" fill="#C86D51" fillOpacity="0.85" />
                <path d="M70 320V180C70 130.3 110.3 90 160 90C209.7 90 250 130.3 250 180V320H70Z" fill="#E7DBCA" />
                <ellipse cx="160" cy="270" rx="45" ry="32" fill="#9E472A" />
                <rect x="148" y="210" width="24" height="40" fill="#9E472A" />
                <path d="M160 210C160 170 190 140 210 130M160 190C160 160 130 140 120 130" stroke="#687050" strokeWidth="3" strokeLinecap="round" />
                <circle cx="160" cy="90" r="14" fill="#D99B4B" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
