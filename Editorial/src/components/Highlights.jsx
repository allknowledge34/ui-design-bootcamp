export function Highlights() {
  const highlights = [
    {
      num: '01',
      title: 'Independent Practice',
      description: 'Zero outside venture debt or external board pressures. We remain exclusively accountable to our craft and client relationships.',
    },
    {
      num: '02',
      title: 'Direct Principal Access',
      description: 'Zero account managers or production proxies. You collaborate directly with the senior engineers designing your systems.',
    },
    {
      num: '03',
      title: 'Complete IP Ownership',
      description: 'All repositories, design assets, and architecture documentation are transferred 100% to your exclusive ownership at launch.',
    },
    {
      num: '04',
      title: 'Fixed-Term Engagements',
      description: 'Transparent milestone parameters and guaranteed delivery schedules with zero hidden scope fees or recurring vendor lock-in.',
    },
  ]

  return (
    <section id="highlights" className="highlights-section">
      <div className="editorial-container">
        <div className="editorial-section-header" style={{ marginBottom: '36px' }}>
          <span className="editorial-section-num">04 // HIGHLIGHTS</span>
          <h2 className="editorial-section-title">Studio Operating Standards</h2>
          <span className="editorial-meta-tag">FOUNDATIONAL PILLARS</span>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.num} className="highlight-item">
              <span className="highlight-num">{item.num}</span>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
