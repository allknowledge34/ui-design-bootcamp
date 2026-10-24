export function TrustBar() {
  const benchmarks = [
    {
      stars: '★★★★★',
      metric: '100% Local Storage',
      label: 'Zero Cloud Surveillance'
    },
    {
      stars: '★★★★★',
      metric: '0 Accounts Required',
      label: 'Complete Financial Privacy'
    },
    {
      stars: '★★★★★',
      metric: 'Native Android Engine',
      label: 'Autonomous Offline Operation'
    }
  ]

  return (
    <div className="y2k-container">
      <div className="trust-benchmark-card" aria-label="Core Product Pillars">
        {benchmarks.map((b, i) => (
          <div key={i} className="benchmark-unit">
            <div className="benchmark-stars">{b.stars}</div>
            <div className="benchmark-rating">{b.label}</div>
            <div className="benchmark-logo-name">{b.metric}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
