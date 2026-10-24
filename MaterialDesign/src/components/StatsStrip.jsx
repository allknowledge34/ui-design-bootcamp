export function StatsStrip() {
  const stats = [
    { number: '482+', label: 'Project Done' },
    { number: '98%', label: 'Success Rate' },
    { number: '234+', label: 'Winning Awards' },
    { number: '72K', label: 'Happy Client' }
  ]

  return (
    <div id="stats" className="md-container">
      <div className="stats-strip-container" aria-label="Key Agency Statistics">
        {stats.map((s, idx) => (
          <div key={idx} className="stat-unit">
            <span className="stat-number num-tabular">{s.number}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
