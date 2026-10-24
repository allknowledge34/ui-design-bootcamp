import { ArrowUpRight, Zap, ShieldCheck, Sparkles } from 'lucide-react'

function FinalCTA() {
  return (
    <section className="cta-max-section" id="get-started">
      <div className="max-container">
        <div className="cta-maximalist-card">
          <div className="cta-backdrop-decorations" aria-hidden="true">
            <span className="cta-star star-1">✦</span>
            <span className="cta-star star-2">★</span>
            <span className="cta-star star-3">⚡</span>
            <div className="cta-checker-strip"></div>
          </div>

          <div className="cta-inner-content">
            <div className="cta-pill-badge">
              <Zap size={16} strokeWidth={3} />
              <span>FREEDOM STARTS HERE</span>
            </div>

            <h2 className="cta-headline-giant">
              TAKE COMPLETE MASTERY OF YOUR FREELANCE FINANCES TODAY.
            </h2>

            <p className="cta-supporting-text">
              Zero complicated accounting bloat. Zero manual spreadsheet formulas. Just instant clarity on income, expenses, and paid invoices from day one.
            </p>

            <div className="cta-buttons-cluster">
              <a href="#get-started" className="btn-cta-giant">
                <span>DOWNLOAD TRALANCE FREE</span>
                <span className="giant-icon-circle">
                  <ArrowUpRight size={22} strokeWidth={3} />
                </span>
              </a>

              <div className="cta-secondary-stores">
                <a href="#get-started" className="cta-store-btn" aria-label="Download on App Store">
                  <svg className="cta-store-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76.99.08 2.03-.5 2.68-1.26z"/>
                  </svg>
                  <span>App Store</span>
                </a>

                <a href="#get-started" className="cta-store-btn" aria-label="Get it on Google Play">
                  <svg className="cta-store-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.378-.404-.61-.97-.61-1.636V3.45c0-.666.232-1.232.61-1.636zm11.246 11.248l2.091 2.091-11.45 6.611 9.359-8.702zm0-2.124L5.496 2.236l11.45 6.611-2.091 2.091zm1.486 1.062l3.414 1.971c.974.562.974 1.479 0 2.041l-3.414 1.971-2.34-2.34 2.34-2.34z"/>
                  </svg>
                  <span>Google Play</span>
                </a>
              </div>
            </div>

            <div className="cta-guarantee-row">
              <span className="guarantee-item">
                <ShieldCheck size={16} strokeWidth={3} />
                <span>NO CREDIT CARD REQUIRED</span>
              </span>
              <span className="guarantee-bullet">★</span>
              <span className="guarantee-item">
                <Sparkles size={16} strokeWidth={3} />
                <span>2-MINUTE SETUP</span>
              </span>
              <span className="guarantee-bullet">★</span>
              <span className="guarantee-item">
                <Zap size={16} strokeWidth={3} />
                <span>100% PRIVATE DATA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
