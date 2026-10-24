function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Record transactions',
      lead: 'Log incoming client payments and operating expenses in seconds with zero friction.',
      tag: 'FAST LOGGING',
      accentColor: 'step-yellow'
    },
    {
      num: '02',
      title: 'Organize projects and payments',
      lead: 'Assign entries to specific client retainers, fixed milestones, or tax deduction buckets.',
      tag: 'PROJECT MAPPING',
      accentColor: 'step-lime'
    },
    {
      num: '03',
      title: 'Review income and expenses',
      lead: 'Gain instant clarity over net profit, upcoming due dates, and true business runway.',
      tag: 'PROFIT MASTERY',
      accentColor: 'step-cyan'
    }
  ]

  return (
    <section className="neo-section how-it-works-section" id="how-it-works">
      <div className="neo-container">
        <div className="section-head-neo">
          <div className="section-tag-pill tag-cyan">
            <span>SIMPLE PIPELINE</span>
          </div>
          <h2 className="section-title-neo">
            HOW TRALANCE WORKS.
          </h2>
          <p className="section-sub-neo">
            Spend less than two minutes a day keeping your books pristine so you can focus on billable client deliverables.
          </p>
        </div>

        <div className="steps-cards-grid">
          {steps.map((s) => (
            <div key={s.num} className={`neo-step-card ${s.accentColor}`}>
              <div className="step-badge-row">
                <span className="step-giant-number">{s.num}</span>
                <span className="step-tag-chip">{s.tag}</span>
              </div>

              <h3 className="step-main-title">{s.title}</h3>
              <p className="step-lead-text">{s.lead}</p>

              <div className="step-status-bar">
                <span className="status-marker">&#9632;</span>
                <span>STEP {s.num} OF 03</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
