export function FinalCTA() {
  return (
    <section id="download" className="swiss-section">
      <div className="section-head-bar">
        <span className="section-index-tag">
          <span className="tag-indicator" aria-hidden="true" />
          <span>[06 / DEPLOYMENT] — ACQUIRE APPLICATION</span>
        </span>
        <span className="section-head-status num-tabular">FREE &amp; OFFLINE</span>
      </div>

      <div className="cta-banner-grid">
        <span className="alt-step-label">IMMEDIATE CLARITY</span>
        <h2 className="cta-headline">
          Take Total Command of Your Freelance Cashflow.
        </h2>
        <p className="cta-subtext">
          No mandatory accounts. No recurring monthly subscriptions. No cloud surveillance. Just dependable, fast financial clarity on your device.
        </p>

        <div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="swiss-btn swiss-btn-primary"
            style={{ fontSize: '0.9375rem', padding: '1rem 2rem' }}
          >
            <span>GET TRALANCE FOR ANDROID</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className="cta-guarantee-strip">
          <span>[LOCAL STORAGE]</span>
          <span>//</span>
          <span>[ZERO TRACKERS]</span>
          <span>//</span>
          <span>[OFFLINE OPERATIONAL]</span>
          <span>//</span>
          <span>[100% FREE]</span>
        </div>
      </div>
    </section>
  )
}
