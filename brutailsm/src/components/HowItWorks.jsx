function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Add your income and expenses.',
      desc: 'Log incoming wires and business receipts with one tap the moment transactions occur.',
      tag: 'FAST INPUT'
    },
    {
      step: '02',
      title: 'Organize transactions by client or project.',
      desc: 'Map every entry to specific project deliverables, retainer agreements, or tax categories.',
      tag: 'STRUCTURED MATRIX'
    },
    {
      step: '03',
      title: 'Review your finances and payment status.',
      desc: 'Inspect settled versus pending milestone payments and understand your true cash runway.',
      tag: 'CALM MASTERY'
    }
  ]

  return (
    <section className="brutal-section how-it-works-section" id="how-it-works">
      <div className="brutal-container">
        <div className="section-header-brutal">
          <div className="section-label-tape">
            <span>THREE-STEP PIPELINE</span>
          </div>
          <h2 className="section-title-brutal">
            HOW IT WORKS.
          </h2>
          <p className="section-sub-brutal">
            A frictionless workflow designed to keep bookkeeping minimal so you focus entirely on client deliverables.
          </p>
        </div>

        <div className="steps-container-grid">
          {steps.map((s) => (
            <div key={s.step} className="step-block">
              <div className="step-header">
                <span className="step-huge-num">{s.step}</span>
                <span className="step-tag">{s.tag}</span>
              </div>

              <div className="step-content">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>

              <div className="step-bottom-strip">
                <span>PHASE {s.step} ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
