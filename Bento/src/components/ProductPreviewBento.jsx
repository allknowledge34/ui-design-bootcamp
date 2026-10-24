import { useState } from 'react'

export function ProductPreviewBento() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section id="preview" className="bento-container bento-section" style={{ paddingTop: '0' }}>
      <div className="bento-card screenshot-bento-card">
        <div style={{ textAlign: 'center', maxWidth: '640px', marginBottom: '2rem' }}>
          <span className="bento-badge badge-brand">Interface</span>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: '0.75rem' }}>
            Built for Focused Mobile Interaction.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            A single, comprehensive overview of your financial standing, designed to function anywhere without internet reliance.
          </p>
        </div>

        <div className="screenshot-bento-frame">
          <div className="screenshot-frame-top">
            <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              TRALANCE // ANDROID APP
            </span>
            <span className="bento-badge badge-emerald">Live Frame</span>
          </div>

          <div className="screenshot-content-zone">
            {!imageLoaded && (
              <div className="screenshot-placeholder-bento">
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', border: '2px dashed var(--accent-brand)', color: 'var(--accent-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }} aria-hidden="true">
                  +
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '800' }}>Product Screenshot Area</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '340px' }}>
                  Place your actual Android application screenshot in the following workspace directory:
                </p>
                <div className="placeholder-pill-path">
                  Bento/public/images/tralance-preview.png
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '320px' }}>
                  The frame will automatically scale and display the true interface without distortion once placed.
                </p>
              </div>
            )}

            {!imageError && (
              <img
                src="/images/tralance-preview.png"
                alt="Tralance Mobile App Interface"
                style={{ width: '100%', height: 'auto', display: imageLoaded ? 'block' : 'none', borderRadius: '12px' }}
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
    </section>
  )
}
