export function FinalCTA() {
  return (
    <section id="download" className="y2k-container y2k-section" style={{ paddingTop: '0' }}>
      <div className="cta-banner-wrapper">
        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--y2k-purple)' }}>
          ✦ 100% FREE &amp; OFFLINE
        </span>

        <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '780px' }}>
          Take total command of your freelance cashflow today.
        </h2>

        <p style={{ fontSize: '1.125rem', color: 'var(--y2k-text-secondary)', maxWidth: '580px', lineHeight: 1.6 }}>
          No mandatory accounts. No recurring subscriptions. No cloud surveillance. Just reliable, fast financial clarity on your Android device.
        </p>

        <div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="y2k-pill-btn"
            style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
          >
            <span>Get Tralance for Android</span>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--y2k-purple)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
              ↓
            </span>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--y2k-surface)', border: '1px solid var(--y2k-border)' }}>
            100% Local Storage
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--y2k-surface)', border: '1px solid var(--y2k-border)' }}>
            Zero Cloud Trackers
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--y2k-surface)', border: '1px solid var(--y2k-border)' }}>
            No Account Required
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--y2k-surface)', border: '1px solid var(--y2k-border)' }}>
            100% Free Application
          </span>
        </div>
      </div>
    </section>
  )
}
