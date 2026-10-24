function Hero() {
  return (
    <section className="neo-section hero-section" id="home">
      <div className="neo-container hero-layout-grid">
        <div className="hero-content-side">
          <div className="hero-sticker-pill">
            <span className="sticker-dot"></span>
            <span>OFFLINE-FIRST FREELANCE TRACKER</span>
          </div>

          <h1 className="hero-headline-neo">
            Manage your freelance finances with{' '}
            <span className="neo-highlight-yellow">confidence.</span>
          </h1>

          <p className="hero-support-copy">
            Track income from client milestones, record deductible business expenses, and monitor project payment statuses with total clarity and zero spreadsheet clutter.
          </p>

          <div className="hero-buttons-row">
            <a href="#download" className="neo-btn btn-accent btn-hero-main">
              <span>GET TRALANCE</span>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="#features" className="neo-btn btn-secondary btn-hero-sub">
              <span>EXPLORE FEATURES</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>

          <div className="hero-pills-cluster">
            <div className="mini-pill pill-lime">
              <span className="pill-check">&#10003;</span>
              <span>100% Local Storage</span>
            </div>
            <div className="mini-pill pill-cyan">
              <span className="pill-check">&#10003;</span>
              <span>Zero Cloud Leaks</span>
            </div>
            <div className="mini-pill pill-coral">
              <span className="pill-check">&#10003;</span>
              <span>Android Ready</span>
            </div>
          </div>
        </div>

        <div className="hero-card-side">
          <div className="neo-hero-preview-card">
            <div className="card-window-head">
              <div className="window-dots-trio">
                <span className="window-dot dot-red"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-green"></span>
              </div>
              <span className="window-title-tag">TRALANCE // RUNWAY V1.0</span>
            </div>

            <div className="card-window-body">
              <div className="quick-stat-row">
                <div className="stat-brick stat-income">
                  <span className="brick-label">MONTHLY INFLOW</span>
                  <span className="brick-val">+$14,250.00</span>
                  <span className="brick-sub">3 Client Retainers</span>
                </div>
                <div className="stat-brick stat-expense">
                  <span className="brick-label">TOTAL EXPENSES</span>
                  <span className="brick-val">-$3,120.00</span>
                  <span className="brick-sub">88% Tax Deductible</span>
                </div>
              </div>

              <div className="status-terminal-strip">
                <div className="strip-left">
                  <span className="terminal-cursor">&gt;</span>
                  <span>NET RUNWAY:</span>
                  <strong className="text-highlight">+$11,130.00 PROFIT</strong>
                </div>
                <span className="status-live-chip">LIVE</span>
              </div>

              <div className="recent-entries-box">
                <div className="entry-row">
                  <div className="entry-title-wrap">
                    <span className="entry-bullet bullet-green"></span>
                    <span className="entry-title">Apex Studio Milestone 2/2</span>
                  </div>
                  <span className="entry-amount green">+$6,500.00</span>
                </div>
                <div className="entry-row">
                  <div className="entry-title-wrap">
                    <span className="entry-bullet bullet-red"></span>
                    <span className="entry-title">Dedicated Workstation Lease</span>
                  </div>
                  <span className="entry-amount red">-$320.00</span>
                </div>
                <div className="entry-row">
                  <div className="entry-title-wrap">
                    <span className="entry-bullet bullet-blue"></span>
                    <span className="entry-title">Creative Cloud &amp; Hosting</span>
                  </div>
                  <span className="entry-amount blue">-$54.99</span>
                </div>
              </div>
            </div>

            <div className="card-window-foot">
              <span>LOCAL ENCRYPTED STORE</span>
              <span>ANDROID 8.0+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
