export function Hero() {
  return (
    <section id="overview" className="swiss-section">
      <div className="section-head-bar">
        <span className="section-index-tag">
          <span className="tag-indicator" aria-hidden="true" />
          <span>[01 / FOUNDATION] — FREELANCE FINANCIAL OPERATING SYSTEM</span>
        </span>
        <span className="section-head-status num-tabular">BUILD 1.0.0 // ANDROID</span>
      </div>

      <div className="hero-editorial-grid">
        <h1 className="hero-main-title">
          Intelligent Ledger &amp; Cashflow Tracking for Independent Professionals.
        </h1>
        <p className="hero-lede-text">
          Tralance delivers uncompromising financial clarity, project payment attribution, and local-first data privacy — engineered to eliminate income ambiguity for modern freelancers.
        </p>

        <div className="hero-actions-cluster">
          <a href="#download" className="swiss-btn swiss-btn-primary">
            <span>DOWNLOAD TRALANCE</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#capabilities" className="swiss-btn swiss-btn-outline">
            <span>VIEW CAPABILITIES</span>
          </a>
        </div>
      </div>

      <div className="hero-stage-showcase">
        <div className="hero-flank-column hero-flank-left">
          <div className="flank-metric-card">
            <span className="flank-metric-val num-tabular">100%</span>
            <span className="flank-metric-label">OFFLINE PRIVACY</span>
            <span className="flank-metric-desc">Zero telemetry, zero cloud tracking, stored locally on your device.</span>
          </div>
          <div className="flank-metric-card">
            <span className="flank-metric-val num-tabular">&lt; 3s</span>
            <span className="flank-metric-label">LOGGING SPEED</span>
            <span className="flank-metric-desc">Record income or categorize expenses instantly without network delays.</span>
          </div>
        </div>

        <div className="hero-center-viewport">
          <div className="screenshot-frame" style={{ maxWidth: '420px', width: '100%' }}>
            <div className="screenshot-frame-header">
              <span className="screenshot-frame-title">TRALANCE // RUNWAY V1.0</span>
              <span className="section-index-tag">
                <span className="tag-indicator" aria-hidden="true" />
                <span>OFFLINE</span>
              </span>
            </div>
            <div className="screenshot-frame-body" style={{ minHeight: '380px', padding: '1.5rem' }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--grid-line)', paddingBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>OCTOBER CASHFLOW</div>
                    <div className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>+$4,250.00</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.6875rem', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>RUNWAY</div>
                    <div className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--swiss-red)' }}>5.8 MO</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--grid-line)', backgroundColor: 'var(--bg-secondary)' }}>
                    <div style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--text-muted)' }}>INCOME YTD</div>
                    <div className="num-tabular" style={{ fontSize: '1.125rem', fontWeight: '800' }}>$38,400</div>
                  </div>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--grid-line)', backgroundColor: 'var(--bg-secondary)' }}>
                    <div style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--text-muted)' }}>EXPENSES YTD</div>
                    <div className="num-tabular" style={{ fontSize: '1.125rem', fontWeight: '800', color: 'var(--swiss-red)' }}>$9,620</div>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--grid-line)' }}>
                  <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.625rem', fontWeight: '800', backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--grid-line)' }}>
                    RECENT TRANSACTIONS
                  </div>
                  <div style={{ padding: '0.625rem 0.75rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--grid-line)', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: '600' }}>Brand Identity Milestone</span>
                    <span className="num-tabular" style={{ fontWeight: '800' }}>+$2,200.00</span>
                  </div>
                  <div style={{ padding: '0.625rem 0.75rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--grid-line)', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: '600' }}>Software Cloud Tooling</span>
                    <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--swiss-red)' }}>-$89.00</span>
                  </div>
                  <div style={{ padding: '0.625rem 0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: '600' }}>Web Development Retainer</span>
                    <span className="num-tabular" style={{ fontWeight: '800' }}>+$1,500.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-flank-column hero-flank-right">
          <div className="flank-metric-card">
            <span className="flank-metric-val num-tabular">$0.00</span>
            <span className="flank-metric-label">UNTRACKED CAPITAL</span>
            <span className="flank-metric-desc">Every invoice, milestone, and expense is bound to a verified category.</span>
          </div>
          <div className="flank-metric-card">
            <span className="flank-metric-val num-tabular">24/7</span>
            <span className="flank-metric-label">LOCAL AUTONOMY</span>
            <span className="flank-metric-desc">Continuous operation anywhere in the world without an internet connection.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
