export function CoreSplit() {
  const ledgerEntries = [
    {
      date: '20 OCT',
      title: 'Mobile App Architecture',
      client: 'Client: Apex Labs Inc.',
      amount: '+$2,450.00',
      isIncome: true
    },
    {
      date: '19 OCT',
      title: 'Figma Annual Subscription',
      client: 'Category: Design Tooling',
      amount: '-$144.00',
      isIncome: false
    },
    {
      date: '18 OCT',
      title: 'Brand Identity Delivery',
      client: 'Client: Veloce Systems',
      amount: '+$1,800.00',
      isIncome: true
    },
    {
      date: '17 OCT',
      title: 'Ergonomic Desk Hardware',
      client: 'Category: Office Equipment',
      amount: '-$320.00',
      isIncome: false
    }
  ]

  return (
    <section id="architecture" className="swiss-section">
      <div className="section-head-bar">
        <span className="section-index-tag">
          <span className="tag-indicator" aria-hidden="true" />
          <span>[02 / ARCHITECTURE] — CORE LEDGER SYSTEM</span>
        </span>
        <span className="section-head-status num-tabular">PRECISION LEDGER</span>
      </div>

      <div className="core-split-grid">
        <div className="split-editorial-side">
          <span className="alt-step-label">FOUNDATION</span>
          <h2 className="split-headline">
            Eliminating The Friction Between Work and Financial Clarity.
          </h2>
          <p className="split-copy">
            Traditional accounting suites burden solo operators with subscription bloat, slow cloud sync, and complex tax ledgers. Tralance gives you direct, uncompromised control over incoming client payments, categorized outgoing expenses, and live net liquidity.
          </p>

          <div className="split-metrics-strip">
            <div className="split-stat-box">
              <span className="split-stat-num num-tabular">100%</span>
              <span className="split-stat-label">LOCAL STORAGE</span>
            </div>
            <div className="split-stat-box">
              <span className="split-stat-num num-tabular">0</span>
              <span className="split-stat-label">REGISTRATIONS REQUIRED</span>
            </div>
          </div>

          <div>
            <a href="#capabilities" className="swiss-btn swiss-btn-outline swiss-btn-sm">
              <span>EXPLORE LEDGER SPECS</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="split-visual-side">
          <div className="swiss-ledger-inspector">
            <div className="inspector-header">
              <span className="inspector-title">SYSTEM LEDGER // OCT 2026</span>
              <span className="inspector-status-badge">VERIFIED</span>
            </div>

            <div className="inspector-table-head">
              <span>DATE</span>
              <span>TRANSACTION</span>
              <span style={{ textAlign: 'right' }}>AMOUNT</span>
            </div>

            <div className="inspector-body">
              {ledgerEntries.map((row, idx) => (
                <div key={idx} className="inspector-row">
                  <span className="inspector-row-date num-tabular">{row.date}</span>
                  <div className="inspector-row-desc">
                    <div>{row.title}</div>
                    <small>{row.client}</small>
                  </div>
                  <span className={`inspector-row-amount num-tabular ${row.isIncome ? 'amount-income' : 'amount-expense'}`}>
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="inspector-footer-summary">
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>NET LIQUIDITY</span>
              <span className="num-tabular" style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>+$3,786.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
