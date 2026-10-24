export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Log Transactions',
      desc: 'Record incoming client deposits or business expenses with customized deductible tags in seconds.'
    },
    {
      num: '02',
      title: 'Attribute to Contracts',
      desc: 'Map transactions directly to specific clients and active project milestones to maintain clean audit records.'
    },
    {
      num: '03',
      title: 'Audit Net Runway',
      desc: 'View your live cashflow buffer, tax set-asides, and payment statuses without complex accounting spreadsheets.'
    }
  ]

  return (
    <section id="workflow" className="y2k-container y2k-section" style={{ paddingTop: '0' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--y2k-purple)' }}>
          WORKFLOW
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: '0.75rem' }}>
          Three simple steps to financial order.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--y2k-text-secondary)', marginTop: '0.5rem' }}>
          Designed to eliminate friction, preserve battery life, and keep your focus on creative work.
        </p>
      </div>

      <div className="workflow-sequence-grid">
        {steps.map((s) => (
          <div key={s.num} className="workflow-step-card">
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--y2k-purple-subtle)', color: 'var(--y2k-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.875rem' }}>
              {s.num}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{s.title}</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--y2k-text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
