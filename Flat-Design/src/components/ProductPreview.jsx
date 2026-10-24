import { useState } from 'react'

export function ProductPreview() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section id="preview" className="flat-container">
      <div className="popping-phone-banner">
        <div className="popping-phone-wrap">
          <div style={{ width: '100%', maxWidth: '300px', backgroundColor: 'var(--flat-surface)', border: '2px solid var(--flat-border)', borderRadius: '32px', padding: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--flat-border)', paddingBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--flat-text-muted)' }}>TRALANCE APP</span>
              <span style={{ fontSize: '0.625rem', fontWeight: '700', padding: '0.15rem 0.4rem', borderRadius: '4px', backgroundColor: 'var(--flat-purple-subtle)', color: 'var(--flat-purple)' }}>NATIVE</span>
            </div>

            <div style={{ minHeight: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {!imageLoaded && (
                <div style={{ padding: '2rem 1rem', textAlign: 'center', backgroundColor: 'var(--flat-surface-subtle)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1px solid var(--flat-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--flat-purple)', fontWeight: '800' }}>
                    +
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--flat-text-primary)' }}>App Screenshot</div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--flat-text-secondary)', maxWidth: '200px' }}>
                    Place your real Android screenshot at:
                  </p>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.6875rem', padding: '0.35rem 0.6rem', borderRadius: '6px', backgroundColor: 'var(--flat-surface)', border: '1px solid var(--flat-border)', color: 'var(--flat-purple)' }}>
                    Flat-Design/public/images/tralance-preview.png
                  </div>
                </div>
              )}

              {!imageError && (
                <img
                  src="/images/tralance-preview.png"
                  alt="Tralance Mobile App Interface"
                  style={{ width: '100%', height: 'auto', display: imageLoaded ? 'block' : 'none', borderRadius: '14px' }}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true)
                    setImageLoaded(false)
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="banner-pitch-column">
          <h2 className="banner-pitch-title">
            Ready? Let&apos;s Start with Tralance and Get Complete Control
          </h2>
          <p className="banner-pitch-text">
            Take total command over every dollar you earn. No subscriptions. No cloud surveillance. Just fast, private financial tracking on Android.
          </p>

          <div style={{ paddingTop: '0.5rem' }}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-pink-btn"
            >
              <span>Get Tralance Free</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
