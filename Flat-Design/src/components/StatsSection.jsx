export function StatsSection() {
  return (
    <section id="stats" className="flat-container">
      <div className="breakdown-two-col-grid">
        <div className="card-widget-stack">
          <div className="floating-icon-diamond" aria-hidden="true">
            ✦
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--flat-border)', paddingBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: '800' }}>Transactions List</span>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--flat-purple)' }}>+ Add Entry</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8125rem', fontWeight: '600' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: 'var(--flat-purple)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              <span>Initial 50% contract retainer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8125rem', fontWeight: '600' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: 'var(--flat-purple)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              <span>Workspace hardware equipment</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8125rem', fontWeight: '600' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: 'var(--flat-purple)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              <span>Final milestone client remittance</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--flat-border)', marginTop: '0.5rem' }}>
            <div className="soundwave-bar-row" aria-hidden="true">
              <span className="soundwave-bar" style={{ height: '12px' }} />
              <span className="soundwave-bar" style={{ height: '20px' }} />
              <span className="soundwave-bar" style={{ height: '16px' }} />
              <span className="soundwave-bar" style={{ height: '24px' }} />
              <span className="soundwave-bar" style={{ height: '14px' }} />
              <span className="soundwave-bar" style={{ height: '18px' }} />
            </div>

            <div className="avatar-stack-circles">
              <div className="avatar-mini">1</div>
              <div className="avatar-mini">2</div>
              <div className="avatar-mini">3</div>
            </div>
          </div>
        </div>

        <div className="stats-vertical-list">
          <div className="numbers-dual-row">
            <div className="number-stat-box">
              <span className="stat-giant-num num-tabular">100%</span>
              <span className="stat-desc-label">Local Data Residency</span>
            </div>
            <div className="number-stat-box">
              <span className="stat-giant-num num-tabular">&lt; 3s</span>
              <span className="stat-desc-label">Fast Logging Velocity</span>
            </div>
          </div>

          <div className="features-bullet-list">
            <div className="bullet-entry">
              <h3 className="bullet-entry-title">Data Sovereignty &amp; Privacy</h3>
              <p className="bullet-entry-text">
                Your financial ledger stays completely on your device with local SQLite storage.
              </p>
            </div>

            <div className="bullet-entry">
              <h3 className="bullet-entry-title">Category &amp; Tax Attachments</h3>
              <p className="bullet-entry-text">
                Tag transactions with custom tax and supply tags for instant year-end reconciliation.
              </p>
            </div>

            <div className="bullet-entry">
              <h3 className="bullet-entry-title">Project &amp; Client Attribution</h3>
              <p className="bullet-entry-text">
                Map every incoming invoice directly to active client contracts to prevent scope creep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
