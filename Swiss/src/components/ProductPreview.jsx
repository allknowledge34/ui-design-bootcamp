import { useState } from 'react'

export function ProductPreview() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section id="preview" className="swiss-section">
      <div className="section-head-bar">
        <span className="section-index-tag">
          <span className="tag-indicator" aria-hidden="true" />
          <span>[04 / INTERFACE] — PRODUCT SCREENSHOT SHOWCASE</span>
        </span>
        <span className="section-head-status num-tabular">ASPECT RATIO AUTO</span>
      </div>

      <div className="screenshot-showcase-container">
        <div className="screenshot-frame">
          <div className="screenshot-frame-header">
            <span className="screenshot-frame-title">TRALANCE APP // ANDROID NATIVE</span>
            <span className="section-index-tag">
              <span className="tag-indicator" aria-hidden="true" />
              <span>LIVE FRAME</span>
            </span>
          </div>

          <div className="screenshot-frame-body">
            {!imageLoaded && (
              <div className="screenshot-placeholder-box">
                <div className="placeholder-icon-square" aria-hidden="true">+</div>
                <div className="placeholder-prompt-title">Product Screenshot Area</div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', maxWidth: '340px' }}>
                  Place your actual Android application screenshot in the following workspace directory:
                </p>
                <div className="placeholder-prompt-path">
                  Swiss/public/images/tralance-preview.png
                </div>
                <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', maxWidth: '300px' }}>
                  The frame will automatically scale and display the true interface without distortion once placed.
                </p>
              </div>
            )}

            {!imageError && (
              <img
                src="/images/tralance-preview.png"
                alt="Tralance Mobile App Interface"
                className="screenshot-img"
                style={{ display: imageLoaded ? 'block' : 'none' }}
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
