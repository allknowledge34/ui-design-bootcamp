export function AlternatingFeatures() {
  return (
    <section id="capabilities" className="swiss-section">
      <div className="section-head-bar">
        <span className="section-index-tag">
          <span className="tag-indicator" aria-hidden="true" />
          <span>[03 / CAPABILITIES] — OPERATIONAL CAPABILITIES</span>
        </span>
        <span className="section-head-status num-tabular">3 CORE MODULES</span>
      </div>

      <div className="alternating-feature-item">
        <div className="alt-visual-cell alt-border-right">
          <div className="timeline-pipeline-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--grid-line)', paddingBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>CONTRACT PIPELINE</span>
              <span className="num-tabular" style={{ fontSize: '0.6875rem', color: 'var(--swiss-red)', fontWeight: '700' }}>ACTIVE FLOW</span>
            </div>

            <div className="pipeline-step">
              <div className="pipeline-node">01</div>
              <div className="pipeline-info">
                <span className="pipeline-title">Contract Execution &amp; Deposit</span>
                <span className="pipeline-sub">50% upfront retainer logged in primary balance</span>
              </div>
            </div>

            <div className="pipeline-step">
              <div className="pipeline-node">02</div>
              <div className="pipeline-info">
                <span className="pipeline-title">Milestone Deliverable Delivery</span>
                <span className="pipeline-sub">Time &amp; material expenses categorized under job code</span>
              </div>
            </div>

            <div className="pipeline-step">
              <div className="pipeline-node">03</div>
              <div className="pipeline-info">
                <span className="pipeline-title">Final Client Settlement</span>
                <span className="pipeline-sub">Net profit calculated automatically upon remittance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="alt-content-cell">
          <span className="alt-step-label">CAPABILITY // 01</span>
          <h2 className="alt-heading">Real-Time Income &amp; Expense Ledger.</h2>
          <p className="alt-description">
            Log every business transaction the moment it happens. Categorize equipment, software subscriptions, tax set-asides, and client remittances with zero latency.
          </p>

          <div className="alt-stats-pair">
            <div className="alt-stat-unit">
              <span className="alt-stat-num num-tabular">0.00ms</span>
              <span className="alt-stat-caption">NETWORK LATENCY</span>
            </div>
            <div className="alt-stat-unit">
              <span className="alt-stat-num num-tabular">100%</span>
              <span className="alt-stat-caption">LEDGER ACCURACY</span>
            </div>
          </div>

          <div>
            <a href="#matrix" className="swiss-btn swiss-btn-outline swiss-btn-sm">
              <span>EXPLORE LEDGER</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="alternating-feature-item">
        <div className="alt-content-cell alt-border-right">
          <span className="alt-step-label">CAPABILITY // 02</span>
          <h2 className="alt-heading">Project &amp; Client Revenue Attribution.</h2>
          <p className="alt-description">
            Never guess which client or project generates your true profit. Map multiple income streams directly to active contracts and track unbilled deliverables without spreadsheets.
          </p>

          <div className="alt-stats-pair">
            <div className="alt-stat-unit">
              <span className="alt-stat-num num-tabular">1:1</span>
              <span className="alt-stat-caption">CONTRACT MAPPING</span>
            </div>
            <div className="alt-stat-unit">
              <span className="alt-stat-num num-tabular">0%</span>
              <span className="alt-stat-caption">UNALLOCATED REVENUE</span>
            </div>
          </div>

          <div>
            <a href="#matrix" className="swiss-btn swiss-btn-outline swiss-btn-sm">
              <span>VIEW ATTRIBUTION</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="alt-visual-cell">
          <div className="client-status-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.875rem 1.25rem', borderBottom: '1px solid var(--grid-line)', backgroundColor: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>CLIENT PORTFOLIO</span>
              <span className="num-tabular" style={{ fontSize: '0.6875rem', fontWeight: '700' }}>3 ACTIVE</span>
            </div>

            <div className="status-grid-item">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Apex Labs Inc.</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Project: Mobile System Redesign</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.875rem', fontWeight: '800' }}>$4,500.00</div>
                <span className="status-pill status-pill-paid">PAID IN FULL</span>
              </div>
            </div>

            <div className="status-grid-item">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Veloce Systems</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Project: Brand Guidelines V2</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.875rem', fontWeight: '800' }}>$2,800.00</div>
                <span className="status-pill status-pill-pending">MILESTONE DUE</span>
              </div>
            </div>

            <div className="status-grid-item">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Nordic Studio</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Project: Design Token Architecture</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.875rem', fontWeight: '800' }}>$1,650.00</div>
                <span className="status-pill status-pill-paid">INVOICE SENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alternating-feature-item">
        <div className="alt-visual-cell alt-border-right">
          <div className="client-status-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.875rem 1.25rem', borderBottom: '1px solid var(--grid-line)', backgroundColor: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>RECEIVABLES AUDIT</span>
              <span className="num-tabular" style={{ fontSize: '0.6875rem', color: 'var(--swiss-red)', fontWeight: '700' }}>LIVE RADAR</span>
            </div>

            <div className="status-grid-item">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Invoice #1042 — Q3 Advisory</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Due: 24 Oct 2026 // Net 15</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.875rem', fontWeight: '800' }}>$1,200.00</div>
                <span className="status-pill status-pill-pending">4 DAYS LEFT</span>
              </div>
            </div>

            <div className="status-grid-item">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Invoice #1041 — Frontend Sprint</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Settled: 16 Oct 2026</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.875rem', fontWeight: '800' }}>$3,400.00</div>
                <span className="status-pill status-pill-paid">CLEARED</span>
              </div>
            </div>

            <div className="status-grid-item">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Total Pending Receivables</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Scheduled cash injection</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text-primary)' }}>$4,450.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="alt-content-cell">
          <span className="alt-step-label">CAPABILITY // 03</span>
          <h2 className="alt-heading">Payment Status &amp; Outstanding Receivables.</h2>
          <p className="alt-description">
            Stay ahead of late-paying clients with rigorous payment status flags. Immediate visual hierarchy highlights pending and overdue milestones before they impact your personal runway.
          </p>

          <div className="alt-stats-pair">
            <div className="alt-stat-unit">
              <span className="alt-stat-num num-tabular">&lt; 5s</span>
              <span className="alt-stat-caption">STATUS AUDIT SPEED</span>
            </div>
            <div className="alt-stat-unit">
              <span className="alt-stat-num num-tabular">100%</span>
              <span className="alt-stat-caption">RECEIVABLE VISIBILITY</span>
            </div>
          </div>

          <div>
            <a href="#matrix" className="swiss-btn swiss-btn-outline swiss-btn-sm">
              <span>VIEW RECEIVABLES</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
