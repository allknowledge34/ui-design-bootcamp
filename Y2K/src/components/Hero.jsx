export function Hero() {
  return (
    <section id="top" className="y2k-container">
      <div className="hero-split-layout">
        <div className="hero-copy-column">
          <h1 className="hero-main-title">
            Manage your freelance finance easily with Tralance.
          </h1>
          <p className="hero-sub-copy">
            Carry your freelance ledger in your pocket with the easiest and most secure offline tracking app you will ever use.
          </p>

          <div className="hero-store-buttons">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="store-capsule"
            >
              <svg className="store-capsule-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.036 2.036 0 0 1-.22-.927V2.741c0-.34.08-.655.22-.927zM14.854 13.06l2.42 2.42-11.83 6.709 9.41-9.13zM18.89 10.74l2.793 1.583c.732.415.732 1.096 0 1.512l-2.793 1.583-2.617-2.617 2.617-2.46zM5.444 1.811l11.83 6.71-2.42 2.42-9.41-9.13z" />
              </svg>
              <div className="store-capsule-text">
                <span className="store-capsule-label">Get it on</span>
                <span className="store-capsule-title">Google Play</span>
              </div>
            </a>

            <a href="#features" className="store-capsule" style={{ backgroundColor: 'var(--y2k-surface-subtle)', color: 'var(--y2k-text-primary)', border: '1px solid var(--y2k-border)' }}>
              <svg className="store-capsule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
              <div className="store-capsule-text">
                <span className="store-capsule-label">Local-First</span>
                <span className="store-capsule-title">Offline Engine</span>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual-column">
          <div className="hero-sunburst-backdrop" aria-hidden="true">
            <div className="hero-sunburst-ring" />
          </div>

          <div className="hero-mobile-frame">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--y2k-text-muted)' }}>
                OCTOBER RUNWAY
              </span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--y2k-purple-subtle)', color: 'var(--y2k-purple)' }}>
                5.8 Mo
              </span>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: '20px', backgroundColor: 'var(--y2k-surface-subtle)', border: '1px solid var(--y2k-border)' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--y2k-text-muted)' }}>NET LIQUIDITY</div>
              <div className="num-tabular" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--y2k-text-primary)' }}>+$4,250.00</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
              <div style={{ padding: '0.75rem', borderRadius: '14px', backgroundColor: 'var(--y2k-surface-subtle)' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--y2k-text-muted)' }}>INCOME</span>
                <div className="num-tabular" style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--y2k-purple)' }}>$38,400</div>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '14px', backgroundColor: 'var(--y2k-surface-subtle)' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: '700', color: 'var(--y2k-text-muted)' }}>EXPENSES</span>
                <div className="num-tabular" style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--y2k-pink)' }}>$9,620</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0.75rem', borderRadius: '10px', backgroundColor: 'var(--y2k-surface-subtle)', fontSize: '0.75rem' }}>
                <span style={{ fontWeight: '600' }}>Brand Design Retainer</span>
                <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--y2k-purple)' }}>+$2,200.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0.75rem', borderRadius: '10px', backgroundColor: 'var(--y2k-surface-subtle)', fontSize: '0.75rem' }}>
                <span style={{ fontWeight: '600' }}>Design Cloud Tooling</span>
                <span className="num-tabular" style={{ fontWeight: '800', color: 'var(--y2k-pink)' }}>-$89.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
