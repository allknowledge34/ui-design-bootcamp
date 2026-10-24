export function AboutStats() {
  const stats = [
    {
      metric: '99.999%',
      label: 'Core Availability',
      sub: 'Verified multi-region uptime benchmark',
    },
    {
      metric: '<12ms',
      label: 'Protocol Latency',
      sub: 'Deterministic worldwide edge routing',
    },
    {
      metric: '240+',
      label: 'Systems Deployed',
      sub: 'Production platforms actively operational',
    },
    {
      metric: '0',
      label: 'Security Breaches',
      sub: 'Impenetrable historical operational track',
    },
  ]

  return (
    <section id="about" className="about-stats-section">
      <div className="cyber-container">
        <div className="section-hud-header" style={{ marginBottom: '36px' }}>
          <div className="section-hud-label">
            <span>[ + ]</span>
            <span>TELEMETRY METRICS // BENCHMARK ACCURACY</span>
          </div>
          <h2 className="section-hud-title">
            Engineered for <span>Continuous Resilience</span>
          </h2>
          <p className="section-hud-desc">
            We don’t rely on third-party abstractions or bloated frameworks. Every platform is designed from first principles for predictable throughput and rigorous defense.
          </p>
        </div>

        <div className="stats-hud-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-hud-cell">
              <div className="stat-cell-top">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--neon-pink)' }}>
                  STAT // 0{idx + 1}
                </span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00F0FF' }} />
              </div>

              <div className="stat-metric-number">{s.metric}</div>
              <h3 className="stat-metric-label">{s.label}</h3>
              <p className="stat-metric-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
