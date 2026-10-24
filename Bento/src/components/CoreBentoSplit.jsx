export function CoreBentoSplit() {
  const ledgerRows = [
    {
      date: '20 Oct',
      title: 'Mobile App Architecture',
      detail: 'Client: Apex Labs Inc.',
      amount: '+$2,450.00',
      isIncome: true
    },
    {
      date: '19 Oct',
      title: 'Figma Annual Subscription',
      detail: 'Category: Software & Tools',
      amount: '-$144.00',
      isIncome: false
    },
    {
      date: '18 Oct',
      title: 'Brand Identity Delivery',
      detail: 'Client: Veloce Systems',
      amount: '+$1,800.00',
      isIncome: true
    },
    {
      date: '17 Oct',
      title: 'Workspace Hardware',
      detail: 'Category: Equipment',
      amount: '-$320.00',
      isIncome: false
    }
  ]

  return (
    <section id="features" className="bento-container bento-section">
      <div className="core-bento-grid">
        <div className="bento-card core-editorial-card">
          <span className="bento-badge badge-brand">Foundation</span>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Take Total Command Over Every Dollar You Earn.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Traditional accounting suites burden solo operators with subscription bloat, slow cloud sync, and complex tax ledgers. Tralance gives you direct, uncompromised control over incoming client payments, categorized outgoing expenses, and live net liquidity.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '0.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)' }}>
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>100%</span>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-brand)', marginTop: '0.25rem' }}>Local Storage</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)' }}>
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>0</span>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-brand)', marginTop: '0.25rem' }}>Logins Required</div>
            </div>
          </div>

          <div>
            <a href="#showcase" className="bento-btn bento-btn-outline bento-btn-sm">
              <span>Explore Ledger Specs</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bento-card core-ledger-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bento-border)', paddingBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>CURRENT LEDGER</span>
              <div style={{ fontSize: '1.125rem', fontWeight: '800' }}>October 2026 Audit</div>
            </div>
            <span className="bento-badge badge-emerald">Verified</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ledgerRows.map((r, i) => (
              <div key={i} className="ledger-row-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }} className="num-tabular">{r.date}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>{r.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.detail}</div>
                  </div>
                </div>
                <div
                  className="num-tabular"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: '800',
                    color: r.isIncome ? 'var(--accent-emerald)' : 'var(--accent-rose)'
                  }}
                >
                  {r.amount}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Net Balance</span>
            <span className="num-tabular" style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--text-primary)' }}>+$3,786.00</span>
          </div>
        </div>
      </div>
    </section>
  )
}
