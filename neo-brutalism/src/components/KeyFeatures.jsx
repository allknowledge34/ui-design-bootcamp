function KeyFeatures() {
  const features = [
    {
      id: 'income-expense',
      title: 'Income & Expense Tracking',
      desc: 'Record client wires, retainer milestones, and business purchases instantly with custom tax write-off classification.',
      badge: 'MONEY FLOW',
      colorClass: 'card-accent-yellow',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      id: 'project-tracking',
      title: 'Project & Client Payments',
      desc: 'Organize work by client account. Track pending invoices, cleared milestones, and delinquent balances in real time.',
      badge: 'CLIENT MATRIX',
      colorClass: 'card-accent-lime',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      id: 'offline-records',
      title: 'Offline-First Records',
      desc: 'Every transaction is stored locally and securely on your Android hardware. No cloud sync dependencies or third-party data tracking.',
      badge: 'MAX PRIVACY',
      colorClass: 'card-accent-blue',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      id: 'financial-overview',
      title: 'Clear Financial Overview',
      desc: 'Understand your net runway, monthly profit margins, and upcoming cash obligations without opening a single spreadsheet.',
      badge: 'CALM RUNWAY',
      colorClass: 'card-accent-coral',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ]

  return (
    <section className="neo-section features-section" id="features">
      <div className="neo-container">
        <div className="section-head-neo">
          <div className="section-tag-pill tag-lime">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="section-title-neo">
            FOUR PILLARS OF FREELANCE CLARITY.
          </h2>
          <p className="section-sub-neo">
            Every feature in Tralance exists to eliminate financial anxiety and protect your bottom line.
          </p>
        </div>

        <div className="features-neo-grid">
          {features.map((f, idx) => (
            <div key={f.id} className={`neo-feature-box ${f.colorClass}`}>
              <div className="box-top-row">
                <div className="box-icon-holder">{f.icon}</div>
                <span className="box-step-badge">0{idx + 1} // {f.badge}</span>
              </div>

              <h3 className="box-title">{f.title}</h3>
              <p className="box-desc">{f.desc}</p>

              <div className="box-foot-row">
                <span className="foot-status">READY FOR USE</span>
                <span className="foot-arrow">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
