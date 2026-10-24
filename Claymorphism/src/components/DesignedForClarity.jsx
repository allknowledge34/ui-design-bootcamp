const IMAGE_PATH = '/images/tralance-preview.png'

function DesignedForClarity() {
  return (
    <section className="clay-clarity-section">
      <div className="clay-container">
        <div className="section-head-center">
          <h2 className="section-title-chunky">Designed for Clarity</h2>
          <p className="section-sub-clean">A clean and intuitive experience.</p>
        </div>

        <div className="clarity-showcase-panoramic">
          <div className="showcase-mini-phone phone-left-far">
            <div className="mini-phone-screen">
              <span className="screen-kicker">Invoice Cleared</span>
              <span className="screen-amount-bold">$100.00</span>
              <span className="screen-client-tag">Emma Design</span>
            </div>
          </div>

          <div className="showcase-mini-phone phone-left-near">
            <div className="mini-phone-screen">
              <span className="screen-kicker">Monthly Inflow</span>
              <span className="screen-amount-bold">$12,480.00</span>
              <div className="screen-bar-chart">
                <span className="bar-col col-1"></span>
                <span className="bar-col col-2"></span>
                <span className="bar-col col-3"></span>
                <span className="bar-col col-4"></span>
                <span className="bar-col col-5"></span>
              </div>
            </div>
          </div>

          <div className="showcase-hero-phone">
            <div className="phone-island">
              <span className="island-lens"></span>
            </div>
            <img src={IMAGE_PATH} alt="Tralance primary app preview" className="hero-phone-img" />
          </div>

          <div className="showcase-mini-phone phone-right-near">
            <div className="mini-phone-screen">
              <span className="screen-kicker">Pay Bills</span>
              <div className="screen-bill-row">
                <span>Workspace</span>
                <strong>$180</strong>
              </div>
              <div className="screen-bill-row">
                <span>Cloud Server</span>
                <strong>$54</strong>
              </div>
            </div>
          </div>

          <div className="showcase-mini-phone phone-right-far">
            <div className="mini-phone-screen">
              <span className="screen-kicker">Tralance Card</span>
              <div className="screen-card-plate">
                <span className="card-brand-chip">TRALANCE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="clarity-annotation-corner">
          <span className="annotation-control-text">Control Your Tomorrow</span>
          <svg className="annotation-control-arrow" viewBox="0 0 45 35" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 28C14 26 24 18 34 6M34 6L26 8M34 6L32 14" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default DesignedForClarity
