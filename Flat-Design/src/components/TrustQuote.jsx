export function TrustQuote() {
  return (
    <section id="quote" className="flat-container">
      <div className="trust-quote-split">
        <div className="trust-badge-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#10b981', fontWeight: '900' }}>★</span>
            <span style={{ fontSize: '0.875rem', fontWeight: '800' }}>Verified 100% Offline</span>
          </div>

          <div style={{ padding: '1rem', borderRadius: '16px', backgroundColor: 'var(--flat-surface)', border: '1px solid var(--flat-border)' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--flat-text-muted)' }}>SOVEREIGNTY</div>
            <div style={{ fontSize: '1.0625rem', fontWeight: '800', marginTop: '0.25rem' }}>0 Accounts Required</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--flat-text-secondary)', marginTop: '0.25rem' }}>
              Your financial records stay exclusively on your Android device.
            </p>
          </div>
        </div>

        <div className="quote-content-col">
          <div className="quote-bubble-icon" aria-hidden="true">
            “
          </div>
          <p className="quote-body-text">
            Tralance was built for independent creators who do not want the bloat, cloud surveillance, or monthly subscription fees of corporate accounting suites.
          </p>
          <div>
            <div className="quote-author-name">Freelance Operating Standard</div>
            <div className="quote-author-role">Autonomous Local Ledger Engine</div>
          </div>
        </div>
      </div>
    </section>
  )
}
