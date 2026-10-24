function FinalCTA() {
  return (
    <section className="neu-cta-section" id="download">
      <div className="neu-container">
        <div className="neu-cta-plate">
          <h2 className="cta-heading-text">
            Manage your freelance finances easily with Tralance.
          </h2>

          <p className="cta-sub-copy">
            Download Tralance today and take control of your freelance income and expenses from your pocket.
          </p>

          <div className="cta-store-buttons-wrap">
            <a href="#download" className="neu-store-btn" aria-label="Download on the App Store">
              <svg className="store-icon-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76.99.08 2.03-.5 2.68-1.26z"/>
              </svg>
              <div className="store-btn-labels">
                <span className="store-btn-sub">Download on the</span>
                <span className="store-btn-main">App Store</span>
              </div>
            </a>

            <a href="#download" className="neu-store-btn" aria-label="Get it on Google Play">
              <svg className="store-icon-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.378-.404-.61-.97-.61-1.636V3.45c0-.666.232-1.232.61-1.636zm11.246 11.248l2.091 2.091-11.45 6.611 9.359-8.702zm0-2.124L5.496 2.236l11.45 6.611-2.091 2.091zm1.486 1.062l3.414 1.971c.974.562.974 1.479 0 2.041l-3.414 1.971-2.34-2.34 2.34-2.34z"/>
              </svg>
              <div className="store-btn-labels">
                <span className="store-btn-sub">GET IT ON</span>
                <span className="store-btn-main">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
