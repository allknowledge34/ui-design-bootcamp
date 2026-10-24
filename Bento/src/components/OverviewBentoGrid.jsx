export function OverviewBentoGrid() {
  return (
    <section id="showcase" className="bento-container bento-section" style={{ paddingTop: '0' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
        <span className="bento-badge badge-brand">Architecture</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: '1rem' }}>
          Everything You Need in One Focused App.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Log transactions, monitor client receivables, evaluate project profitability, and preserve your data privacy — all within a single offline application.
        </p>
      </div>

      <div className="overview-bento-grid">
        <div className="bento-card bento-tile-span-8">
          <span className="bento-badge badge-emerald">01 / Ledger</span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '1rem' }}>
            Instant Transaction Ledger &amp; Tax Categories.
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
            Record income and expenses the second they occur. Organize by project, client, or deductible expense category with automatic balance recalculation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' }}>
            <div style={{ padding: '0.875rem 1rem', borderRadius: '10px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)', fontSize: '0.8125rem', fontWeight: '700' }}>
              <span style={{ color: 'var(--accent-emerald)', marginRight: '0.5rem' }}>✓</span>
              <span>Single-tap entry under 3s</span>
            </div>
            <div style={{ padding: '0.875rem 1rem', borderRadius: '10px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)', fontSize: '0.8125rem', fontWeight: '700' }}>
              <span style={{ color: 'var(--accent-emerald)', marginRight: '0.5rem' }}>✓</span>
              <span>Custom tax &amp; supply tags</span>
            </div>
            <div style={{ padding: '0.875rem 1rem', borderRadius: '10px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)', fontSize: '0.8125rem', fontWeight: '700' }}>
              <span style={{ color: 'var(--accent-emerald)', marginRight: '0.5rem' }}>✓</span>
              <span>Month-by-month summaries</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-tile-span-4">
          <span className="bento-badge badge-sky">02 / Sovereignty</span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '1rem' }}>
            100% Local Data.
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
            Your balance never leaves your device. No cloud sync, no tracking, and no external data breaches.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
            <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: 'var(--bento-card-subtle)', border: '1px solid var(--bento-border)', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>
              LOCAL SQLITE DATABASE // ZERO CLOUD
            </div>
          </div>
        </div>

        <div className="bento-card bento-tile-span-6">
          <span className="bento-badge badge-brand">03 / Attribution</span>
          <h3 style={{ fontSize: '1.375rem', fontWeight: 900, marginTop: '1rem' }}>
            Client &amp; Project Accounts.
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
            Map payments and project expenses directly to active clients. See which contracts are profitable and where scope creep is reducing margins.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            <span className="bento-badge badge-brand">Dedicated Client Cards</span>
            <span className="bento-badge badge-brand">Milestone Tracking</span>
            <span className="bento-badge badge-brand">P&amp;L Breakdown</span>
          </div>
        </div>

        <div className="bento-card bento-tile-span-6">
          <span className="bento-badge badge-amber">04 / Runway</span>
          <h3 style={{ fontSize: '1.375rem', fontWeight: 900, marginTop: '1rem' }}>
            Runway &amp; Receivables Radar.
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
            Know exactly how many months of operational runway remain based on your average monthly burn rate and incoming client receivables.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            <span className="bento-badge badge-amber">Live Runway Meter</span>
            <span className="bento-badge badge-rose">Overdue Flags</span>
            <span className="bento-badge badge-emerald">Cash Injection Radar</span>
          </div>
        </div>
      </div>
    </section>
  )
}
