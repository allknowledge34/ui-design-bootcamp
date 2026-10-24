function EverydayFinance() {
  const stats = [
    { value: '8K', label: 'Freelancers', colorClass: 'disc-peach' },
    { value: '15K', label: 'Invoices', colorClass: 'disc-mint' },
    { value: '20K+', label: 'Payments', colorClass: 'disc-sky' },
    { value: '88%', label: 'Tax Deductions', colorClass: 'disc-sage' }
  ]

  return (
    <section className="clay-everyday-section">
      <div className="clay-container">
        <div className="section-head-center">
          <h2 className="section-title-chunky">Built for Everyday Finance</h2>
          <p className="section-sub-clean">Join thousands of freelancers who manage their money smarter.</p>
        </div>

        <div className="everyday-content-wrap">
          <div className="stats-discs-row">
            {stats.map((st) => (
              <div key={st.label} className={`clay-stat-disc ${st.colorClass}`}>
                <span className="disc-value-text">{st.value}</span>
                <span className="disc-label-text">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="everyday-annotation-wrap">
            <span className="annotation-future-text">A Brighter Financial Future</span>
            <svg className="annotation-future-arrow" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 8C20 6 36 12 42 22M42 22L36 24M42 22L40 14" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EverydayFinance
