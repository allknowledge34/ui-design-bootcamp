import { useState } from 'react'

const SCREENSHOT_PATH = '/images/tralance-preview.png'

function Showcase() {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const items = [
    { title: 'INCOME LOGGING', note: 'Single-tap entry for wires, retainers, and milestone payouts.' },
    { title: 'EXPENSE CATEGORIZATION', note: 'Mark tax deductions and recurring operating costs instantly.' },
    { title: 'CASHFLOW VISIBILITY', note: 'Real-time profit tracking with zero spreadsheet formulas.' },
  ]

  return (
    <section className="brutal-section showcase-section" id="showcase">
      <div className="brutal-container showcase-split-grid">
        <div className="showcase-content-pane">
          <div className="section-label-tape">
            <span>OPERATIONAL OVERVIEW</span>
          </div>

          <h2 className="showcase-headline">
            YOUR FINANCES. <br />
            <span className="highlight-block">UNDER CONTROL.</span>
          </h2>

          <p className="showcase-lead">
            Understand your income, expenses, and profit without unnecessary complexity.
          </p>

          <div className="showcase-list">
            {items.map((item, index) => (
              <div key={item.title} className="showcase-list-item">
                <span className="item-index">0{index + 1}</span>
                <div className="item-text-group">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-note">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="showcase-action-wrap">
            <a href="#download" className="brutal-btn btn-primary">
              <span>GET TRALANCE FREE</span>
              <span className="arrow-mark" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="showcase-graphic-pane">
          <div className="showcase-terminal-box">
            <div className="terminal-header">
              <span className="terminal-title">LIVE FEED // OVERVIEW</span>
              <span className="terminal-tag">ANDROID VERIFIED</span>
            </div>

            <div className="terminal-screen-wrapper">
              {!imgError && (
                <img
                  src={SCREENSHOT_PATH}
                  alt="Tralance financial overview dashboard view"
                  className="showcase-preview-img"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImageError(true)}
                  style={{ display: imgLoaded ? 'block' : 'none' }}
                />
              )}

              {(!imgLoaded || imgError) && (
                <div className="terminal-fallback-table">
                  <div className="table-row-head">
                    <span>TRANSACTION MATRIX</span>
                    <span>TYPE</span>
                  </div>
                  <div className="table-row">
                    <span>APEX STUDIO RETAINER</span>
                    <strong className="text-accent">INCOME</strong>
                  </div>
                  <div className="table-row">
                    <span>DEDICATED WORKSPACE</span>
                    <span>EXPENSE</span>
                  </div>
                  <div className="table-row">
                    <span>DESIGN SOFTWARE SUITE</span>
                    <span>EXPENSE</span>
                  </div>
                  <div className="table-row-summary">
                    <span>NET TAKE-HOME STATUS:</span>
                    <span className="text-accent">HEALTHY</span>
                  </div>
                </div>
              )}
            </div>

            <div className="terminal-footer">
              <span>TRALANCE PROTOCOL // NO CLOUD REQUIRED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
