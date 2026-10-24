export function Hero({ onOpenModal }) {
  return (
    <section className="hero-section">
      <div className="victorian-container">
        <div className="hero-victorian-grid">
          <div className="hero-editorial-col">
            <div className="hero-crest-badge">
              <span style={{ color: '#C8A96E' }}>❖</span>
              <span className="hero-crest-text">BY ROYAL WARRANT // PURVEYORS SINCE 1887</span>
              <span style={{ color: '#C8A96E' }}>❖</span>
            </div>

            <h1 className="hero-serif-headline">
              TIMELESS ELEGANCE &amp; <em>NOBLE PROVENANCE</em>
            </h1>

            <p className="hero-brief-desc">
              Purveyors of rare Victorian antiquities, museum-grade horological heirlooms, and masterfully handcrafted decorative treasures preserved across generations.
            </p>

            <div className="hero-cta-pair">
              <button
                type="button"
                className="victorian-btn victorian-btn-gold"
                onClick={() => onOpenModal('Curator Consultation')}
              >
                <span>REQUEST PRIVATE VIEWING</span>
              </button>

              <a href="#collections" className="victorian-btn victorian-btn-outline">
                <span>EXPLORE CATALOGUE</span>
              </a>
            </div>
          </div>

          <div className="hero-visual-frame" aria-hidden="true">
            <div className="flourish-corner flourish-tl" />
            <div className="flourish-corner flourish-tr" />
            <div className="flourish-corner flourish-bl" />
            <div className="flourish-corner flourish-br" />

            <div className="hero-visual-inner">
              <svg width="85%" height="85%" viewBox="0 0 320 380" fill="none">
                <rect x="15" y="15" width="290" height="350" stroke="#C8A96E" strokeWidth="1.5" />
                <rect x="25" y="25" width="270" height="330" stroke="#8F7242" strokeWidth="0.8" strokeDasharray="3 3" />
                
                <circle cx="160" cy="180" r="95" stroke="#C8A96E" strokeWidth="2" fill="none" />
                <circle cx="160" cy="180" r="82" stroke="#8F7242" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                
                <circle cx="160" cy="180" r="6" fill="#3B0D18" stroke="#C8A96E" strokeWidth="1.5" />
                <line x1="160" y1="180" x2="160" y2="115" stroke="#3B0D18" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="160" y1="180" x2="205" y2="180" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" />
                
                <path d="M160 50L170 75L195 80L175 98L180 125L160 110L140 125L145 98L125 80L150 75Z" fill="#C8A96E" />
                
                <text x="160" y="310" fontFamily="Cinzel, serif" fontSize="13" fontWeight="700" fill="#3B0D18" textAnchor="middle" letterSpacing="0.16em">ANNO DOMINI 1887</text>
                <text x="160" y="328" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="13" fill="#8F7242" textAnchor="middle">St. James&apos;s &bull; London</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
