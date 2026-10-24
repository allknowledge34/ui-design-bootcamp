export function Hero({ onOpenCart }) {
  return (
    <section className="hero-section">
      <div className="pop-container">
        <div className="hero-pop-grid">
          <div className="hero-content-col">
            <div className="hero-shout-pill">
              <span>★ NEW SUMMER DROP // VOL. 04 ★</span>
            </div>

            <h1 className="hero-headline">
              GOOD VIBES <span className="hero-headline-accent">ONLY!</span>
            </h1>

            <p className="hero-support-line">
              Loud, unapologetic streetwear engineered in screaming, high-voltage color. Step out of the grayscale and wear the noise.
            </p>

            <div className="hero-cta-box">
              <a href="#collection" className="pop-btn pop-btn-yellow">
                <span>GRAB THE DROP</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <button
                type="button"
                className="pop-btn pop-btn-white"
                onClick={onOpenCart}
              >
                VIEW CART
              </button>
            </div>
          </div>

          <div className="hero-visual-col" aria-hidden="true">
            <div className="hero-burst-overlay">
              <div className="starburst-badge">
                POW!
              </div>
            </div>

            <div className="hero-graphic-stage halftone-cyan-bg">
              <svg width="80%" height="80%" viewBox="0 0 320 320" fill="none">
                <rect x="25" y="45" width="270" height="230" fill="#FFE800" stroke="#000000" strokeWidth="4" />
                <circle cx="160" cy="160" r="90" fill="#FF007F" stroke="#000000" strokeWidth="4" />
                <path d="M70 140C90 110 140 110 160 140C180 110 230 110 250 140C260 180 230 210 160 230C90 210 60 180 70 140Z" fill="#FF1E27" stroke="#000000" strokeWidth="4" />
                <path d="M95 155C120 180 200 180 225 155C200 195 120 195 95 155Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
                <polygon points="40 70 65 95 30 110 50 135" fill="#00F0FF" stroke="#000000" strokeWidth="2.5" />
                <polygon points="280 80 255 105 290 120 270 145" fill="#00F0FF" stroke="#000000" strokeWidth="2.5" />
                <text x="160" y="270" fontFamily="Bangers, sans-serif" fontSize="24" fill="#000000" textAnchor="middle" letterSpacing="0.05em">RAW COLOR ONLY</text>
              </svg>
            </div>

            <div className="hero-speech-overlay">
              <div className="speech-bubble">
                STAND OUT OR BLEND IN!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
