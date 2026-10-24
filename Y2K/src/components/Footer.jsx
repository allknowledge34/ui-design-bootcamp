export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="y2k-footer-block">
      <div className="y2k-container">
        <div className="footer-columns-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '1.25rem', fontWeight: 900 }}>
              <svg className="brand-starburst" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
              <span>Tralance</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)', maxWidth: '300px', lineHeight: 1.6 }}>
              The deliberate, offline-first personal finance application engineered for modern independent creators and contractors.
            </p>
            <div style={{ fontSize: '0.75rem', color: 'var(--y2k-text-muted)' }}>
              Y2K RETRO-FUTURISM EDITION // ANDROID
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--y2k-purple)' }}>Navigation</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><a href="#top" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Home</a></li>
              <li><a href="#features" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Features</a></li>
              <li><a href="#workflow" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Workflow</a></li>
              <li><a href="#preview" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>App Overview</a></li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--y2k-purple)' }}>Capabilities</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><a href="#features" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Easy Transactions</a></li>
              <li><a href="#features" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Project Attribution</a></li>
              <li><a href="#features" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Advanced Privacy</a></li>
              <li><a href="#preview" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Invoice Radar</a></li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--y2k-purple)' }}>Sovereignty</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><a href="#features" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>100% Local Storage</a></li>
              <li><a href="#features" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Zero Telemetry</a></li>
              <li><a href="#download" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Google Play Store</a></li>
              <li><a href="#top" style={{ fontSize: '0.875rem', color: 'var(--y2k-text-secondary)' }}>Back to Top</a></li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', fontSize: '0.8125rem', color: 'var(--y2k-text-muted)', flexWrap: 'wrap', gap: '1rem' }}>
          <span>&copy; {new Date().getFullYear()} Tralance. All rights reserved.</span>
          <span>Version 1.0.0 // Android Native</span>
          <button type="button" onClick={scrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontWeight: 700, color: 'var(--y2k-text-primary)' }}>
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
