export function StatsStrip() {
  const stats = [
    {
      digit: '99.98',
      unit: '%',
      caption: 'Production Reliability',
      explanation: 'Uptime maintained across all client production deployments.',
    },
    {
      digit: '140',
      unit: '+',
      caption: 'Projects Delivered',
      explanation: 'End-to-end software platforms engineered on schedule.',
    },
    {
      digit: '18',
      unit: 'yr',
      caption: 'Engineering Craft',
      explanation: 'Continuous studio operation with uncompromising standards.',
    },
    {
      digit: '<15',
      unit: 'm',
      caption: 'Dedicated SLA',
      explanation: 'Direct practitioner triage on active retainer agreements.',
    },
  ]

  return (
    <section id="metrics" className="stats-area">
      <div className="skeuo-container">
        <div className="stats-panel-strip">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-cell">
              <div className="stat-num-row">
                <span className="stat-digit">{stat.digit}</span>
                <span className="stat-unit">{stat.unit}</span>
              </div>
              <h4 className="stat-caption">{stat.caption}</h4>
              <p className="stat-explanation">{stat.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
