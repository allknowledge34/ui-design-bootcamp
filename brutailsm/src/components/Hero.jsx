import { useState } from 'react'

const SCREENSHOT_PATH = '/images/tralance-preview.png'

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <section className="brutal-section hero-section" id="home">
      <div className="brutal-container hero-grid">
        <div className="hero-text-pane">
          <div className="hero-badge">
            <span className="badge-bullet"></span>
            <span>ANDROID APP // LIVE</span>
          </div>

          <h1 className="hero-title">
            MANAGE YOUR <br />
            <span className="highlight-block">FREELANCE FINANCES.</span>
          </h1>

          <p className="hero-lead">
            Track income, manage expenses, and stay in control of your freelance business with Tralance.
          </p>

          <div className="hero-actions">
            <a href="#download" className="brutal-btn btn-primary btn-hero">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.378-.404-.61-.97-.61-1.636V3.45c0-.666.232-1.232.61-1.636zm11.246 11.248l2.091 2.091-11.45 6.611 9.359-8.702zm0-2.124L5.496 2.236l11.45 6.611-2.091 2.091zm1.486 1.062l3.414 1.971c.974.562.974 1.479 0 2.041l-3.414 1.971-2.34-2.34 2.34-2.34z"/>
              </svg>
              <span>GOOGLE PLAY</span>
            </a>

            <a href="#features" className="brutal-btn btn-secondary btn-hero">
              <span>EXPLORE FEATURES</span>
              <span className="arrow-mark" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="hero-meta-row">
            <div className="meta-item">
              <span className="meta-label">ARCHITECTURE</span>
              <span className="meta-val">OFFLINE-FIRST</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">COST</span>
              <span className="meta-val">100% FREE</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">PRIVACY</span>
              <span className="meta-val">LOCAL DEVICE ONLY</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-pane">
          <div className="brutal-screenshot-frame">
            <div className="frame-top-ticker">
              <span className="ticker-label">FRAME // PREVIEW</span>
              <span className="ticker-dot"></span>
              <span className="ticker-status">SYSTEM ACTIVE</span>
            </div>

            <div className="frame-viewport">
              {!imgError && (
                <img
                  src={SCREENSHOT_PATH}
                  alt="Tralance Android application screenshot showing income and expense tracking interface"
                  className="hero-screenshot"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImageError(true)}
                  style={{ display: imgLoaded ? 'block' : 'none' }}
                />
              )}

              {(!imgLoaded || imgError) && (
                <div className="screenshot-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-tag">[ SCREENSHOT CONTAINER ]</span>
                    <h2 className="placeholder-title">TRALANCE DASHBOARD</h2>
                    <p className="placeholder-sub">Expected path: /images/tralance-preview.png</p>
                    <div className="placeholder-box">
                      <div className="ph-line"><span>ACTIVE BALANCE:</span><strong>$14,250.00</strong></div>
                      <div className="ph-line"><span>MONTHLY RUNWAY:</span><strong>UNRESTRICTED</strong></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="frame-bottom-bar">
              <span>APP VERSION 1.0.0</span>
              <span>ANDROID 8.0+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
