export function Hero() {
  return (
    <section id="top" className="hero-wrapper-section">
      <div className="flat-container">
        <div className="hero-main-grid">
          <div className="hero-text-side">
            <h1 className="hero-big-title">
              Maximize Your <span className="text-purple">Cashflow</span>
            </h1>
            <p className="hero-description">
              Conquer your freelance tasks and take complete control over your income, expenses, and project deliverables with our offline app.
            </p>

            <div style={{ paddingTop: '0.5rem' }}>
              <a href="#preview" className="pill-pink-btn">
                <span>Get Tralance</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-device-side">
            <div className="phone-card-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--flat-text-muted)' }}>
                  OCTOBER RUNWAY
                </span>
                <span style={{ fontSize: '0.6875rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--flat-purple-subtle)', color: 'var(--flat-purple)' }}>
                  5.8 Mo
                </span>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '18px', backgroundColor: 'var(--flat-surface-subtle)', border: '1px solid var(--flat-border)' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--flat-text-muted)' }}>NET LIQUIDITY</div>
                <div className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--flat-text-primary)' }}>+$4,250.00</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: 'var(--flat-surface-subtle)' }}>
                  <span style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--flat-text-muted)' }}>INCOME</span>
                  <div className="num-tabular" style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--flat-purple)' }}>$38,400</div>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: 'var(--flat-surface-subtle)' }}>
                  <span style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--flat-text-muted)' }}>EXPENSES</span>
                  <div className="num-tabular" style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--flat-pink)' }}>$9,620</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0.75rem', borderRadius: '10px', backgroundColor: 'var(--flat-surface-subtle)', fontSize: '0.75rem' }}>
                  <span style={{ fontWeight: '600' }}>Brand Design Retainer</span>
                  <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--flat-purple)' }}>+$2,200.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0.75rem', borderRadius: '10px', backgroundColor: 'var(--flat-surface-subtle)', fontSize: '0.75rem' }}>
                  <span style={{ fontWeight: '600' }}>Design Tooling Subscription</span>
                  <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--flat-pink)' }}>-$89.00</span>
                </div>
              </div>
            </div>

            <div className="floating-card-pill floating-top-right">
              <div style={{ fontWeight: '800', color: 'var(--flat-text-primary)' }}>Project Overview</div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--flat-text-muted)', marginTop: '0.2rem' }}>Mobile System Redesign</div>
            </div>

            <div className="floating-card-pill floating-mid-right">
              <div style={{ fontWeight: '800', color: 'var(--flat-text-primary)' }}>Ledger List</div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--flat-text-muted)', marginTop: '0.2rem' }}>Brand Identity Retainer</div>
            </div>

            <div className="floating-card-pill floating-trust-tag">
              <span style={{ color: '#10b981', fontWeight: '900' }}>★</span>
              <span style={{ fontWeight: '800', color: 'var(--flat-text-primary)' }}>100% Offline-First</span>
            </div>
          </div>
        </div>

        <div className="hero-purple-shelf">
          <div className="shelf-features-col">
            <div className="shelf-feature-box">
              <div className="shelf-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div style={{ fontWeight: '800', fontSize: '1rem' }}>Custom Workflow</div>
              <p style={{ fontSize: '0.8125rem', opacity: 0.85, lineHeight: 1.4 }}>
                Log income &amp; expenses with real-time balance calculations.
              </p>
            </div>

            <div className="shelf-feature-box">
              <div className="shelf-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div style={{ fontWeight: '800', fontSize: '1rem' }}>Project Budgets</div>
              <p style={{ fontSize: '0.8125rem', opacity: 0.85, lineHeight: 1.4 }}>
                Map revenue directly to client contracts and deliverables.
              </p>
            </div>
          </div>

          <div className="shelf-social-col">
            <div className="avatar-stack-circles">
              <div className="avatar-mini">✦</div>
              <div className="avatar-mini">✓</div>
              <div className="avatar-mini">★</div>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>
              Zero Cloud Surveillance • 100% Offline
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
