function Features() {
  const features = [
    {
      num: '01',
      title: 'Track Income & Expenses',
      desc: 'Keep a clear record of freelance earnings and expenses with exact date, client, and tax deduction tags.',
      code: 'MODULE // LEDGER',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="7" y1="15" x2="11" y2="15" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Manage Projects',
      desc: 'Organize client projects and track payment status across milestones, retainers, and pending invoices.',
      code: 'MODULE // MATRIX',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Stay in Control',
      desc: 'Understand financial activity and plan better for the future with instant net runway calculations.',
      code: 'MODULE // RUNWAY',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    }
  ]

  return (
    <section className="brutal-section features-section" id="features">
      <div className="brutal-container">
        <div className="section-header-brutal">
          <div className="section-label-tape">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="section-title-brutal">
            BUILT FOR RAW FINANCIAL MASTERY.
          </h2>
          <p className="section-sub-brutal">
            Three focused pillars engineered strictly for independent freelancers, contractors, and solo operators.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.num} className="feature-card">
              <div className="feature-top-row">
                <span className="feature-number">{f.num}</span>
                <div className="feature-icon-box">{f.icon}</div>
              </div>

              <div className="feature-code-tag">{f.code}</div>

              <h3 className="feature-title">{f.title}</h3>

              <p className="feature-desc">{f.desc}</p>

              <div className="feature-bottom-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
