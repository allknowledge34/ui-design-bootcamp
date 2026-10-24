export function FeaturedCollection({ onSelectLot }) {
  const collection = [
    {
      lot: 'LOT NO. MDCCCLXXXVII',
      title: 'The Imperial Tourbillon Chronometer',
      description: 'Hand-chased 18-karat antique gold pocket chronometer featuring a vitreous white enamel dial, blued steel Breguet hands, and fusee movement.',
      provenance: 'London, circa 1888',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 240 160" fill="none">
          <circle cx="120" cy="80" r="55" stroke="#C8A96E" strokeWidth="2" fill="#FFFFFF" />
          <circle cx="120" cy="80" r="46" stroke="#8F7242" strokeWidth="0.8" strokeDasharray="3 2" fill="none" />
          <circle cx="120" cy="80" r="4" fill="#3B0D18" />
          <line x1="120" y1="80" x2="120" y2="45" stroke="#3B0D18" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="80" x2="148" y2="80" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="115" y="16" width="10" height="10" stroke="#C8A96E" strokeWidth="1.5" fill="#3B0D18" />
          <circle cx="120" cy="12" r="6" stroke="#C8A96E" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      lot: 'LOT NO. MDCCCXC',
      title: 'The Grand Marquetry Bureau',
      description: 'Circa 1885 burr walnut cabinet with delicate boxwood floral inlays, hand-cast bronze ormolu mounts, and concealed secret document compartments.',
      provenance: 'Edinburgh, circa 1885',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 240 160" fill="none">
          <rect x="55" y="30" width="130" height="100" stroke="#C8A96E" strokeWidth="1.5" fill="#FFFFFF" />
          <rect x="62" y="36" width="116" height="88" stroke="#8F7242" strokeWidth="0.8" fill="none" />
          <line x1="120" y1="36" x2="120" y2="124" stroke="#C8A96E" strokeWidth="1" />
          <line x1="62" y1="75" x2="178" y2="75" stroke="#C8A96E" strokeWidth="1" />
          <circle cx="112" cy="75" r="2.5" fill="#3B0D18" />
          <circle cx="128" cy="75" r="2.5" fill="#3B0D18" />
          <path d="M55 130L45 145H65L55 130Z" fill="#C8A96E" />
          <path d="M185 130L175 145H195L185 130Z" fill="#C8A96E" />
        </svg>
      ),
    },
    {
      lot: 'LOT NO. MDCCCXCIV',
      title: 'The Sovereign Sterling Tea Service',
      description: 'Hand-hammered heavy sterling silver comprising teapot, cream jug, and sugar bowl, deeply chased with Victorian acanthus foliage and carved ebony handles.',
      provenance: 'Birmingham, circa 1892',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 240 160" fill="none">
          <ellipse cx="120" cy="90" rx="48" ry="34" stroke="#C8A96E" strokeWidth="1.5" fill="#FFFFFF" />
          <path d="M95 56H145L135 68H105L95 56Z" stroke="#C8A96E" strokeWidth="1.2" fill="#3B0D18" />
          <circle cx="120" cy="52" r="3" fill="#C8A96E" />
          <path d="M72 85C50 85 45 65 60 55" stroke="#3B0D18" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M168 85C190 75 195 95 185 105" stroke="#C8A96E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <line x1="90" y1="124" x2="150" y2="124" stroke="#C8A96E" strokeWidth="2" />
        </svg>
      ),
    },
  ]

  return (
    <section id="collections" className="collection-section">
      <div className="victorian-container">
        <div className="section-victorian-header">
          <span className="section-heraldic-tag">CURATED RARITIES</span>
          <h2 className="section-victorian-title">FEATURED ACQUISITIONS</h2>
          <div className="section-ornament-divider">
            <span />
            <span>❖</span>
            <span />
          </div>
          <p className="section-victorian-desc">
            Each artifact authenticated by master curators and accompanied by comprehensive lineage and provenance documentation.
          </p>
        </div>

        <div className="collection-triplet-grid">
          {collection.map((item) => (
            <article key={item.lot} className="victorian-frame-card collection-item-card">
              <div className="flourish-corner flourish-tl" />
              <div className="flourish-corner flourish-tr" />
              <div className="flourish-corner flourish-bl" />
              <div className="flourish-corner flourish-br" />

              <div className="collection-item-graphic" aria-hidden="true">
                {item.graphic}
              </div>

              <div className="collection-lot-tag">{item.lot} &bull; {item.provenance}</div>
              <h3 className="collection-item-title">{item.title}</h3>
              <p className="collection-item-desc">{item.description}</p>

              <div>
                <button
                  type="button"
                  className="victorian-btn victorian-btn-outline"
                  style={{ width: '100%', fontSize: '0.76rem', padding: '11px 20px' }}
                  onClick={() => onSelectLot(item.title)}
                >
                  INQUIRE FOR PROVENANCE
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
