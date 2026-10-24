export function FinancialMatrix() {
  const columns = [
    {
      index: '01 / LEDGER',
      title: 'Transaction Ledger',
      body: 'Rapidly record incoming client payments and categorized business expenses with instant balance adjustment.',
      points: [
        'Instant logging with zero latency',
        'Customizable expense categories',
        'Direct credit and debit classification',
        'Month-by-month financial ledger'
      ]
    },
    {
      index: '02 / CONTRACTS',
      title: 'Project Accounts',
      body: 'Tie transactions directly to client projects to understand actual profitability and avoid unpaid scope creep.',
      points: [
        'Dedicated client profile cards',
        'Per-project profit and loss tracking',
        'Milestone-based payment status',
        'Overdue receivable radar'
      ]
    },
    {
      index: '03 / SOVEREIGNTY',
      title: 'Data Sovereignty',
      body: 'Your finances belong to you alone. Tralance operates completely offline with zero servers, accounts, or telemetry.',
      points: [
        '100% local database storage',
        'Zero cloud dependency or sync errors',
        'No registration or passwords',
        'Fast and lightweight on Android'
      ]
    }
  ]

  return (
    <section id="matrix" className="swiss-section">
      <div className="section-head-bar">
        <span className="section-index-tag">
          <span className="tag-indicator" aria-hidden="true" />
          <span>[05 / SPECIFICATIONS] — FINANCIAL MANAGEMENT MATRIX</span>
        </span>
        <span className="section-head-status num-tabular">3 CORE DOMAINS</span>
      </div>

      <div style={{ padding: '3.5rem 1.75rem 2.5rem', borderBottom: '1px solid var(--grid-line)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, maxWidth: '900px' }}>
          Structured Simplicity Across All Financial Vectors.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '720px' }}>
          Log transactions, monitor client receivables, evaluate project profitability, and preserve your data privacy — all within a single offline application.
        </p>
      </div>

      <div className="matrix-three-columns">
        {columns.map((col) => (
          <div key={col.index} className="matrix-column-cell">
            <span className="matrix-index">{col.index}</span>
            <h3 className="matrix-title">{col.title}</h3>
            <p className="matrix-body">{col.body}</p>
            <ul className="matrix-checklist">
              {col.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
