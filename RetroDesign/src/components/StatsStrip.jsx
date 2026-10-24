export function StatsStrip() {
  const stats = [
    {
      value: '99.99',
      suffix: '%',
      label: 'Production Reliability',
      description: 'Historical uptime maintained across our client critical infrastructure.',
    },
    {
      value: '140',
      suffix: '+',
      label: 'Engagements Delivered',
      description: 'Enterprise architectures and bespoke web applications shipped on schedule.',
    },
    {
      value: '18',
      suffix: 'yr',
      label: 'Engineering Practice',
      description: 'Continuous studio operation with uncompromising craftsmanship standards.',
    },
    {
      value: '<15',
      suffix: 'm',
      label: 'Dedicated SLA Response',
      description: 'Direct engineer-to-engineer incident triage on active service agreements.',
    },
  ]

  return (
    <section id="metrics" className="stats-section">
      <div className="retro-container">
        <div className="stats-card-strip">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-metric-wrap">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
