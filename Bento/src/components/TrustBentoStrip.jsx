export function TrustBentoStrip() {
  const principles = [
    {
      badge: 'Engine',
      title: 'Local SQLite Engine',
      desc: 'Instant read/write operations without server dependency.'
    },
    {
      badge: 'Privacy',
      title: 'Zero Telemetry',
      desc: 'No personal analytics, tracking scripts, or cloud leaks.'
    },
    {
      badge: 'Audit',
      title: 'Real-Time P&L',
      desc: 'Automated runway calculations with zero manual formulas.'
    },
    {
      badge: 'Attribution',
      title: 'Contract Mapping',
      desc: 'Tie transactions directly to client projects and deliverables.'
    },
    {
      badge: 'Mobile',
      title: 'Native Android',
      desc: 'Tailored for Android with low memory and fast responsiveness.'
    }
  ]

  return (
    <div className="bento-container">
      <div className="ticker-strip-grid" aria-label="Core Engineering Standards">
        {principles.map((p, idx) => (
          <div key={idx} className="ticker-bento-tile">
            <span style={{ fontSize: '0.6875rem', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-brand)' }}>
              {p.badge}
            </span>
            <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)' }}>{p.title}</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
