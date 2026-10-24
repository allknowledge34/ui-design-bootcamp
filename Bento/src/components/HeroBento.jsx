export function HeroBento() {
  return (
    <section id="overview" className="bento-container" style={{ paddingTop: '2.5rem' }}>
      <div className="hero-bento-grid">
        <div className="bento-card hero-main-card">
          <span className="bento-badge badge-brand">
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
            <span>Autonomous Freelance Finance</span>
          </span>

          <h1 className="hero-headline">
            Smarter Cashflow &amp; Expense Tracking for Freelancers.
          </h1>

          <p className="hero-subtext">
            An offline-first personal finance app built for independent contractors to track income, categorize expenses, and monitor client deliverables without spreadsheet complexity.
          </p>

          <div className="hero-actions">
            <a href="#download" className="bento-btn bento-btn-primary">
              <span>Get Tralance Free</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#features" className="bento-btn bento-btn-outline">
              <span>Explore Features</span>
            </a>
          </div>
        </div>

        <div className="bento-card hero-preview-card">
          <div className="mini-app-phone-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>OCTOBER RUNWAY</span>
                <div className="num-tabular" style={{ fontSize: '1.625rem', fontWeight: '900', color: 'var(--text-primary)' }}>+$4,250.00</div>
              </div>
              <span className="bento-badge badge-emerald">5.8 Mo</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
              <div style={{ padding: '0.75rem', borderRadius: '10px', backgroundColor: 'var(--bento-card-subtle)' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>INCOME</span>
                <div className="num-tabular" style={{ fontSize: '1.0625rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>$38,400</div>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '10px', backgroundColor: 'var(--bento-card-subtle)' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>EXPENSES</span>
                <div className="num-tabular" style={{ fontSize: '1.0625rem', fontWeight: '800', color: 'var(--accent-rose)' }}>$9,620</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0.75rem', borderRadius: '8px', backgroundColor: 'var(--bento-card-subtle)', fontSize: '0.75rem' }}>
                <span style={{ fontWeight: '600' }}>Mobile App Design</span>
                <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--accent-emerald)' }}>+$2,200.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0.75rem', borderRadius: '8px', backgroundColor: 'var(--bento-card-subtle)', fontSize: '0.75rem' }}>
                <span style={{ fontWeight: '600' }}>Cloud Subscriptions</span>
                <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--accent-rose)' }}>-$89.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card hero-stat-card-1">
          <span className="bento-badge badge-sky">Data Locality</span>
          <div className="num-tabular" style={{ fontSize: '2.25rem', fontWeight: '900', marginTop: '0.75rem', color: 'var(--text-primary)' }}>100%</div>
          <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.25rem' }}>Offline Sovereignty</div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Zero cloud surveillance or server tracking. All records are stored securely on your phone.
          </p>
        </div>

        <div className="bento-card hero-stat-card-2">
          <span className="bento-badge badge-emerald">Velocity</span>
          <div className="num-tabular" style={{ fontSize: '2.25rem', fontWeight: '900', marginTop: '0.75rem', color: 'var(--text-primary)' }}>&lt; 3s</div>
          <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.25rem' }}>Logging Speed</div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Record invoices or categorize expenses instantly without waiting for cloud sync.
          </p>
        </div>

        <div className="bento-card hero-stat-card-3">
          <span className="bento-badge badge-amber">Accuracy</span>
          <div className="num-tabular" style={{ fontSize: '2.25rem', fontWeight: '900', marginTop: '0.75rem', color: 'var(--text-primary)' }}>$0.00</div>
          <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.25rem' }}>Unallocated Capital</div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Every single invoice, deposit, and business expense is mapped to an active project.
          </p>
        </div>
      </div>
    </section>
  )
}
