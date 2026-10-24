export function FinalBentoCTA() {
  return (
    <section id="download" className="bento-container bento-section" style={{ paddingTop: '0' }}>
      <div className="bento-card cta-bento-card">
        <span className="bento-badge badge-brand">Instant Clarity</span>
        <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '800px' }}>
          Take Complete Control of Your Freelance Cashflow.
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6 }}>
          No mandatory accounts. No recurring subscriptions. No cloud surveillance. Just reliable, fast financial clarity on your Android device.
        </p>

        <div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-btn bento-btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2rem' }}
          >
            <span>Get Tralance for Android</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className="guarantee-badges-strip">
          <span className="bento-badge badge-sky">100% Local Storage</span>
          <span className="bento-badge badge-emerald">Zero Cloud Leaks</span>
          <span className="bento-badge badge-brand">No Account Required</span>
          <span className="bento-badge badge-amber">100% Free Application</span>
        </div>
      </div>
    </section>
  )
}
