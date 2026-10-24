export function AlternatingBentoFeatures() {
  return (
    <section className="bento-container bento-section" style={{ paddingTop: '0' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
        <span className="bento-badge badge-brand">Capabilities</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: '1rem' }}>
          Engineered for Freelance Financial Independence.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Three dedicated core modules that give you total insight into daily expenses, active contracts, and scheduled cash injections.
        </p>
      </div>

      <div className="alternating-bento-row">
        <div className="bento-card alt-bento-visual">
          <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>CONTRACT LIFECYCLE</span>
              <span className="bento-badge badge-brand">Active Flow</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'var(--accent-emerald)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '800', flexShrink: 0 }}>
                  01
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Deposit &amp; Retainer</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>50% advance booked directly into local balance</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'var(--accent-brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '800', flexShrink: 0 }}>
                  02
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Milestone Deliverable</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Expenses &amp; contractor costs bound to project code</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'var(--accent-sky)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '800', flexShrink: 0 }}>
                  03
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Final Settlement</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Net profit calculated automatically upon remittance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card alt-bento-content">
          <span className="bento-badge badge-emerald">Module 01</span>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Real-Time Income &amp; Expense Ledger.
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Log business transactions the moment they occur. Categorize equipment, software subscriptions, tax set-asides, and client remittances with zero friction.
          </p>

          <div className="alt-stat-flex">
            <div className="alt-stat-card">
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>0.00ms</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Network Latency</span>
            </div>
            <div className="alt-stat-card">
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>100%</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Ledger Precision</span>
            </div>
          </div>

          <div>
            <a href="#showcase" className="bento-btn bento-btn-outline bento-btn-sm">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>

      <div className="alternating-bento-row">
        <div className="bento-card alt-bento-content">
          <span className="bento-badge badge-brand">Module 02</span>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Project &amp; Client Revenue Attribution.
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Never guess which client or project generates your true profit. Map multiple income streams directly to active contracts and track unbilled deliverables without spreadsheets.
          </p>

          <div className="alt-stat-flex">
            <div className="alt-stat-card">
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>1:1</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Contract Mapping</span>
            </div>
            <div className="alt-stat-card">
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>0%</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Unallocated Revenue</span>
            </div>
          </div>

          <div>
            <a href="#showcase" className="bento-btn bento-btn-outline bento-btn-sm">
              <span>Learn More</span>
            </a>
          </div>
        </div>

        <div className="bento-card alt-bento-visual">
          <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>CLIENT PORTFOLIO</span>
              <span className="bento-badge badge-brand">3 Active</span>
            </div>

            <div style={{ padding: '0.875rem 1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-bg)', border: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Apex Labs Inc.</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mobile Architecture</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.9375rem', fontWeight: '800' }}>$4,500.00</div>
                <span className="bento-badge badge-emerald" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem' }}>Paid</span>
              </div>
            </div>

            <div style={{ padding: '0.875rem 1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-bg)', border: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Veloce Systems</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Brand Guidelines</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.9375rem', fontWeight: '800' }}>$2,800.00</div>
                <span className="bento-badge badge-amber" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem' }}>Milestone Due</span>
              </div>
            </div>

            <div style={{ padding: '0.875rem 1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-bg)', border: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Nordic Studio</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Design Tokens</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.9375rem', fontWeight: '800' }}>$1,650.00</div>
                <span className="bento-badge badge-brand" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem' }}>Invoiced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alternating-bento-row">
        <div className="bento-card alt-bento-visual">
          <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>RECEIVABLES RADAR</span>
              <span className="bento-badge badge-rose">Live Radar</span>
            </div>

            <div style={{ padding: '0.875rem 1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-bg)', border: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Invoice #1042 — Q3 Advisory</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Due: 24 Oct 2026 // Net 15</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.9375rem', fontWeight: '800' }}>$1,200.00</div>
                <span className="bento-badge badge-amber" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem' }}>4 Days Left</span>
              </div>
            </div>

            <div style={{ padding: '0.875rem 1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-bg)', border: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Invoice #1041 — Frontend Sprint</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Settled: 16 Oct 2026</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num-tabular" style={{ fontSize: '0.9375rem', fontWeight: '800' }}>$3,400.00</div>
                <span className="bento-badge badge-emerald" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem' }}>Cleared</span>
              </div>
            </div>

            <div style={{ padding: '0.875rem 1rem', borderRadius: '12px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Total Pending Receivables</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Scheduled cash injection</div>
              </div>
              <span className="num-tabular" style={{ fontSize: '1.0625rem', fontWeight: '900', color: 'var(--text-primary)' }}>$4,450.00</span>
            </div>
          </div>
        </div>

        <div className="bento-card alt-bento-content">
          <span className="bento-badge badge-rose">Module 03</span>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Payment Status &amp; Outstanding Receivables.
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Stay ahead of late-paying clients with rigorous payment status flags. Immediate visual hierarchy highlights overdue milestones before they impact your personal runway.
          </p>

          <div className="alt-stat-flex">
            <div className="alt-stat-card">
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>&lt; 5s</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Status Audit Speed</span>
            </div>
            <div className="alt-stat-card">
              <span className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)' }}>100%</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Payment Visibility</span>
            </div>
          </div>

          <div>
            <a href="#showcase" className="bento-btn bento-btn-outline bento-btn-sm">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
