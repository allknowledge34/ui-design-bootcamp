export function HowItWorksBento() {
  const steps = [
    {
      num: '01',
      title: 'Log in Seconds',
      desc: 'Record income deposits or outgoing business expenses with customized deductible tags in under 3 seconds.'
    },
    {
      num: '02',
      title: 'Attribute to Contracts',
      desc: 'Map transactions directly to specific clients and active project milestones to maintain clean audit records.'
    },
    {
      num: '03',
      title: 'Evaluate Net Runway',
      desc: 'View your live cashflow buffer, tax set-asides, and payment statuses without complex accounting spreadsheets.'
    }
  ]

  return (
    <section id="workflow" className="bento-container bento-section" style={{ paddingTop: '0' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
        <span className="bento-badge badge-brand">Workflow</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: '1rem' }}>
          Three Simple Steps to Financial Order.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Designed from the ground up to minimize screen time and maximize bookkeeping clarity.
        </p>
      </div>

      <div className="workflow-bento-row">
        {steps.map((s) => (
          <div key={s.num} className="bento-card workflow-card">
            <div className="workflow-index-badge">{s.num}</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{s.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
