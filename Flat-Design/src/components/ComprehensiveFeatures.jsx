export function ComprehensiveFeatures() {
  return (
    <section id="comprehensive" className="flat-container">
      <div className="comprehensive-section-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Comprehensive <span className="text-purple">Feature Set</span> of Tralance App
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--flat-purple-subtle)', color: 'var(--flat-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>
                ✦
              </div>
              <div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800 }}>Data Sovereignty &amp; Offline Core</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--flat-text-secondary)', marginTop: '0.25rem' }}>
                  Operates completely offline with zero dependency on third-party servers.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--flat-purple-subtle)', color: 'var(--flat-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>
                ✦
              </div>
              <div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800 }}>Invoice &amp; Runway Radar</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--flat-text-secondary)', marginTop: '0.25rem' }}>
                  Automated calculations of remaining operational runway based on monthly spend.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: '380px', backgroundColor: 'var(--flat-surface-subtle)', border: '1px solid var(--flat-border)', borderRadius: '28px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--flat-purple)', color: '#fff' }}>
                Create Invoice
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--flat-surface)', border: '1px solid var(--flat-border)' }}>
                App Design
              </span>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: '16px', backgroundColor: 'var(--flat-surface)', border: '1px solid var(--flat-border)' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--flat-text-muted)' }}>PROJECT OVERVIEW</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', marginTop: '0.25rem' }}>Apex Labs Inc.</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--flat-text-secondary)', marginTop: '0.25rem' }}>
                Design a modern and clean Android native application.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', padding: '0.5rem 1.25rem', borderRadius: '9999px', backgroundColor: 'var(--flat-surface)', border: '1px solid var(--flat-border)' }}>
                Total Working Runway: 5.8 Months
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
