import { useState } from 'react'

const SCREENSHOT_PATH = '/images/tralance-preview.png'

function ProductPreview() {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <section className="neo-section preview-section" id="preview">
      <div className="neo-container">
        <div className="section-head-neo">
          <div className="section-tag-pill tag-yellow">
            <span>APP INTERFACE</span>
          </div>
          <h2 className="section-title-neo">
            BUILT FOR THE REALITIES OF FREELANCING.
          </h2>
          <p className="section-sub-neo">
            Inspect the live interface of Tralance. Designed with high-density financial data, instant entries, and complete privacy.
          </p>
        </div>

        <div className="preview-showcase-box">
          <div className="preview-window-frame">
            <div className="preview-bar-top">
              <div className="preview-window-controls">
                <span className="control-circle circle-1"></span>
                <span className="control-circle circle-2"></span>
                <span className="control-circle circle-3"></span>
              </div>
              <span className="preview-address-capsule">tralance.app // dashboard-preview</span>
              <span className="preview-status-pill">OFFLINE-FIRST</span>
            </div>

            <div className="preview-stage-area">
              {!imgError && (
                <img
                  src={SCREENSHOT_PATH}
                  alt="Tralance application dashboard screenshot"
                  className="preview-real-image"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImageError(true)}
                  style={{ display: imgLoaded ? 'block' : 'none' }}
                />
              )}

              {(!imgLoaded || imgError) && (
                <div className="preview-intentional-placeholder">
                  <div className="placeholder-icon-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="32" height="32" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <h3 className="placeholder-main-text">DEDICATED SCREENSHOT FRAME</h3>
                  <p className="placeholder-guide-text">
                    Add your real screenshot to:
                  </p>
                  <code className="placeholder-path-code">neo-brutalism/public/images/tralance-preview.png</code>
                  <div className="placeholder-spec-box">
                    <span>STATUS: FRAME CONFIGURED &amp; READY</span>
                    <span>AUTO-SCALES WITHOUT DISTORTION</span>
                  </div>
                </div>
              )}
            </div>

            <div className="preview-bar-bottom">
              <div className="bottom-tag-group">
                <span className="tag-block">SYSTEM: ANDROID</span>
                <span className="tag-block">SECURITY: ON-DEVICE STORAGE</span>
              </div>
              <span className="bottom-note-text">NO ACCOUNT REGISTRATION REQUIRED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPreview
