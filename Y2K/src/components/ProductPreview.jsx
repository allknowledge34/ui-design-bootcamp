import { useState } from 'react'

export function ProductPreview() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section id="preview" className="y2k-container y2k-section" style={{ paddingTop: '0' }}>
      <div className="split-detail-section">
        <div className="screenshot-target-wrapper">
          <div className="screenshot-header-row">
            <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--y2k-text-muted)' }}>
              TRALANCE // ANDROID APP
            </span>
            <span style={{ fontSize: '0.6875rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--y2k-purple-subtle)', color: 'var(--y2k-purple)' }}>
              LIVE FRAME
            </span>
          </div>

          <div style={{ minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!imageLoaded && (
              <div className="screenshot-empty-fallback">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--y2k-surface)', border: '2px dashed var(--y2k-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--y2k-purple)', fontSize: '1.25rem', fontWeight: '800' }}>
                  ✦
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '800' }}>App Screenshot Area</div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--y2k-text-secondary)', maxWidth: '300px' }}>
                  Place your actual Android application screenshot in the following workspace directory:
                </p>
                <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', padding: '0.4rem 0.75rem', borderRadius: '8px', backgroundColor: 'var(--y2k-surface)', border: '1px solid var(--y2k-border)', color: 'var(--y2k-purple)' }}>
                  Y2K/public/images/tralance-preview.png
                </div>
                <p style={{ fontSize: '0.6875rem', color: 'var(--y2k-text-muted)', maxWidth: '280px' }}>
                  The frame will automatically scale and display the true interface once added.
                </p>
              </div>
            )}

            {!imageError && (
              <img
                src="/images/tralance-preview.png"
                alt="Tralance Mobile App Interface"
                style={{ width: '100%', height: 'auto', display: imageLoaded ? 'block' : 'none', borderRadius: '16px' }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true)
                  setImageLoaded(false)
                }}
              />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--y2k-purple)' }}>
            FINANCIAL RADAR
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Management of invoices and project cashflow.
          </h2>

          <p style={{ fontSize: '1.0625rem', color: 'var(--y2k-text-secondary)', lineHeight: 1.6 }}>
            From initial client deposit to final milestone settlement, Tralance keeps your business finances organized and predictable with zero accounting complexity.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', fontWeight: '600' }}>
              <span style={{ color: 'var(--y2k-purple)' }}>✦</span>
              <span>Real-time balance calculations with instant profit totals</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', fontWeight: '600' }}>
              <span style={{ color: 'var(--y2k-purple)' }}>✦</span>
              <span>Overdue invoice radar flags with customizable due dates</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', fontWeight: '600' }}>
              <span style={{ color: 'var(--y2k-purple)' }}>✦</span>
              <span>100% offline data portability with zero cloud reliance</span>
            </div>
          </div>

          <div style={{ paddingTop: '0.5rem' }}>
            <a href="#download" className="y2k-pill-btn">
              <span>Get Started Free</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
