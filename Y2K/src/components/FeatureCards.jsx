export function FeatureCards() {
  const cards = [
    {
      colorClass: 'card-yellow',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v12M15 9.5a3.5 3.5 0 0 0-5 0c0 2 3 2.5 3 4.5a3.5 3.5 0 0 1-5 0" />
        </svg>
      ),
      headline: 'Easy Transactions',
      description: 'Log freelance income and business expenses in seconds with automatic real-time balance calculations.',
      btnText: 'Explore Ledger',
      btnHref: '#preview'
    },
    {
      colorClass: 'card-purple',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      headline: 'Project Attribution',
      description: 'Map revenue streams directly to active contracts and client deliverables to eliminate unpaid scope creep.',
      btnText: 'View Projects',
      btnHref: '#preview'
    },
    {
      colorClass: 'card-pink',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      headline: 'Advanced Privacy',
      description: 'Your financial ledger remains 100% on your Android device. Zero external cloud servers, trackers, or data sync.',
      btnText: 'Learn More',
      btnHref: '#workflow'
    }
  ]

  return (
    <section id="features" className="y2k-container y2k-section">
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Unleash the true potential of independent finance.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--y2k-text-secondary)', marginTop: '0.75rem' }}>
          Three dedicated modules built to bring total clarity, speed, and privacy to your freelance finances.
        </p>
      </div>

      <div className="three-cards-grid">
        {cards.map((c, i) => (
          <div key={i} className={`feature-pastel-card ${c.colorClass}`}>
            <div className="card-badge-circle">
              {c.icon}
            </div>

            <div className="card-content-wrap">
              <h3 className="card-headline">{c.headline}</h3>
              <p className="card-paragraph">{c.description}</p>
            </div>

            <div>
              <a href={c.btnHref} className="y2k-pill-btn y2k-pill-btn-sm">
                <span>{c.btnText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
