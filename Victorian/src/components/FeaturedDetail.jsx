export function FeaturedDetail({ onOpenModal }) {
  return (
    <section id="detail" className="detail-showcase-section">
      <div className="victorian-container">
        <div className="detail-ornate-plate">
          <div className="flourish-corner flourish-tl" />
          <div className="flourish-corner flourish-tr" />
          <div className="flourish-corner flourish-bl" />
          <div className="flourish-corner flourish-br" />

          <div style={{ display: 'flex', justifyContent: 'center' }} aria-hidden="true">
            <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
              <circle cx="130" cy="130" r="115" stroke="#C8A96E" strokeWidth="2" fill="#FAF7F0" />
              <circle cx="130" cy="130" r="102" stroke="#8F7242" strokeWidth="1" strokeDasharray="4 2" fill="none" />
              <circle cx="130" cy="130" r="88" stroke="#3B0D18" strokeWidth="1.5" fill="#3B0D18" />
              <circle cx="130" cy="130" r="82" stroke="#C8A96E" strokeWidth="0.8" fill="none" />
              
              <path d="M130 65L138 88L162 90L142 106L148 130L130 116L112 130L118 106L98 90L122 88Z" fill="#E5CCA2" />
              <circle cx="130" cy="148" r="4" fill="#E5CCA2" />
              
              <text x="130" y="174" fontFamily="Cinzel, serif" fontSize="10" fontWeight="700" fill="#E5CCA2" textAnchor="middle" letterSpacing="0.2em">VERITAS ET</text>
              <text x="130" y="190" fontFamily="Cinzel, serif" fontSize="10" fontWeight="700" fill="#E5CCA2" textAnchor="middle" letterSpacing="0.2em">ARTIFICIUM</text>
            </svg>
          </div>

          <div>
            <span className="section-heraldic-tag">PRIVATE CONCIERGE</span>
            <h2 className="section-victorian-title" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}>
              BESPOKE ATELIER CURATION
            </h2>
            <div className="section-ornament-divider" style={{ justifyContent: 'flex-start', margin: '14px 0 18px' }}>
              <span style={{ width: '32px' }} />
              <span>❖</span>
            </div>
            <p className="section-victorian-desc" style={{ marginBottom: '26px' }}>
              For patrons seeking specific horological rarities, antique mahogany library suites, or authenticated silver collections, our senior curators conduct private acquisitions directly from historic British and continental estates.
            </p>
            <button
              type="button"
              className="victorian-btn victorian-btn-gold"
              onClick={() => onOpenModal('Bespoke Private Curation')}
            >
              <span>SCHEDULE PRIVATE CURATION</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
