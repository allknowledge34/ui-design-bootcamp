import { useState } from 'react'
import { ArrowUpRight, Wifi, Battery, ShieldCheck, Zap, Sparkles, TrendingUp, CreditCard, Laptop } from 'lucide-react'

const IMAGE_PATH = '/images/tralance-preview.png'

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageErrored, setImageErrored] = useState(false)

  return (
    <section className="max-hero-section" id="overview">
      <div className="max-hero-backdrop-patterns" aria-hidden="true">
        <div className="pattern-grid"></div>
        <div className="floating-shape shape-starburst">✦</div>
        <div className="floating-shape shape-lightning">⚡</div>
        <div className="floating-shape shape-circle"></div>
      </div>

      <div className="max-container max-hero-grid">
        <div className="max-hero-copy">

          <h1 className="max-hero-title">
            <span className="title-row title-row-main">MANAGE YOUR</span>
            <span className="title-row title-highlight-coral">FREELANCE FINANCE</span>
            <span className="title-row title-row-sub">EASILY WITH TRALANCE.</span>
          </h1>

          <p className="max-hero-subtitle">
            Track income and expenses, organize client contracts, and know exactly where every payment stands in real time. Built strictly for independent creators, designers, and engineers.
          </p>

          <div className="hero-action-cluster">
            <a href="#get-started" className="btn-hero-primary">
              <span className="btn-text">START TRACKING NOW</span>
              <span className="btn-icon-box">
                <ArrowUpRight size={20} strokeWidth={3} />
              </span>
            </a>

            <div className="store-badge-group">
              <a href="#get-started" className="max-store-pill" aria-label="Download on the App Store">
                <svg className="store-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76.99.08 2.03-.5 2.68-1.26z"/>
                </svg>
                <div className="store-labels">
                  <span className="store-sub">Download on</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>

              <a href="#get-started" className="max-store-pill" aria-label="Get it on Google Play">
                <svg className="store-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.378-.404-.61-.97-.61-1.636V3.45c0-.666.232-1.232.61-1.636zm11.246 11.248l2.091 2.091-11.45 6.611 9.359-8.702zm0-2.124L5.496 2.236l11.45 6.611-2.091 2.091zm1.486 1.062l3.414 1.971c.974.562.974 1.479 0 2.041l-3.414 1.971-2.34-2.34 2.34-2.34z"/>
                </svg>
                <div className="store-labels">
                  <span className="store-sub">GET IT ON</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="hero-metrics-strip">
            <div className="metric-box box-yellow">
              <span className="metric-stat">100%</span>
              <span className="metric-desc">Private & Local Storage</span>
            </div>
            <div className="metric-box box-cyan">
              <span className="metric-stat">3.2X</span>
              <span className="metric-desc">Faster Tax Estimations</span>
            </div>
            <div className="metric-box box-pink">
              <span className="metric-stat">0</span>
              <span className="metric-desc">Spreadsheets Required</span>
            </div>
          </div>
        </div>

        <div className="max-hero-visual-col">
          <div className="visual-stack-canvas">
            <div className="stack-backdrop-card backdrop-card-primary" aria-hidden="true"></div>
            <div className="stack-backdrop-card backdrop-card-secondary" aria-hidden="true"></div>

            <div className="floating-sticker sticker-cashflow">
              <TrendingUp size={16} strokeWidth={3} />
              <span>+$4,250 CLIENT INVOICE CLEARED</span>
            </div>

            <div className="floating-sticker sticker-security">
              <ShieldCheck size={16} strokeWidth={3} />
              <span>TAX-READY REPORTING</span>
            </div>

            <div className="max-phone-chassis">
              <div className="chassis-island">
                <div className="island-lens"></div>
                <div className="island-sensor"></div>
              </div>

              <div className="chassis-screen">
                {!imageErrored && (
                  <img
                    src={IMAGE_PATH}
                    alt="Tralance live app screenshot"
                    className="chassis-screen-img"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageErrored(true)}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                  />
                )}

                {(!imageLoaded || imageErrored) && (
                  <div className="screen-fallback-ui">
                    <div className="fallback-header">
                      <span className="fallback-time">09:41</span>
                      <div className="fallback-status">
                        <Wifi size={13} strokeWidth={2.5} />
                        <Battery size={15} strokeWidth={2.5} />
                      </div>
                    </div>

                    <div className="fallback-wallet-card">
                      <div className="wallet-card-header">
                        <span className="wallet-label">FREELANCE NET INCOME</span>
                        <div className="wallet-chip"></div>
                      </div>
                      <div className="wallet-balance">$18,450.00</div>
                      <div className="wallet-card-footer">
                        <span>OCTOBER REVENUE</span>
                        <span className="wallet-status-tag">ACTIVE ✦</span>
                      </div>
                    </div>

                    <div className="fallback-transactions">
                      <div className="fallback-row">
                        <div className="fallback-row-icon icon-emerald">
                          <CreditCard size={14} />
                        </div>
                        <div className="fallback-row-info">
                          <p className="fallback-row-title">Fintech Design Retainer</p>
                          <p className="fallback-row-sub">Client: Apex Studio</p>
                        </div>
                        <span className="fallback-row-amount text-emerald">+$6,500</span>
                      </div>

                      <div className="fallback-row">
                        <div className="fallback-row-icon icon-purple">
                          <Laptop size={14} />
                        </div>
                        <div className="fallback-row-info">
                          <p className="fallback-row-title">Workspace & Cloud Infra</p>
                          <p className="fallback-row-sub">Monthly Tax Deductible</p>
                        </div>
                        <span className="fallback-row-amount text-rose">-$350</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
