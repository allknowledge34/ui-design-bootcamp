export function LifestyleShowcase() {
  return (
    <section id="showcase" className="showcase-section">
      <div className="boho-container">
        <div className="showcase-asymmetric-composition">
          <div className="showcase-art-panel" aria-hidden="true">
            <svg width="100%" height="320" viewBox="0 0 360 320" fill="none">
              <path d="M40 300V140C40 84.8 84.8 40 140 40C195.2 40 240 84.8 240 140V300H40Z" fill="#C86D51" />
              <path d="M160 300V180C160 135.8 195.8 100 240 100C284.2 100 320 135.8 320 180V300H160Z" fill="#D99B4B" fillOpacity="0.85" />
              <circle cx="100" cy="110" r="30" fill="#FAF6EE" />
              <ellipse cx="140" cy="250" rx="35" ry="45" fill="#FAF6EE" />
              <rect x="130" y="195" width="20" height="25" fill="#FAF6EE" />
              <path d="M140 195C140 150 170 120 190 100" stroke="#687050" strokeWidth="3" strokeLinecap="round" />
              <path d="M140 170C130 150 110 135 100 125" stroke="#687050" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <div className="section-botanical-tag">
              <span>✦</span>
              <span>ORGANIC HARMONY // LIVING WITH NATURE</span>
            </div>

            <h2 className="section-boho-title" style={{ fontSize: 'clamp(2rem, 3.4vw, 2.7rem)' }}>
              SPACE FOR MINDFUL PAUSE &amp; NATURAL LIGHT
            </h2>

            <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '24px' }}>
              We design objects that sit peacefully within sunlit rooms. When warm light grazes unglazed terracotta, coarse linen, and hand-beaten brass, the home transforms from a hurried enclosure into a sanctuary of stillness.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--boho-walnut)' }}>
                <span style={{ color: 'var(--boho-terracotta)' }}>✦</span>
                <span>Naturally regulated humidity through raw, breathable clay</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--boho-walnut)' }}>
                <span style={{ color: 'var(--boho-terracotta)' }}>✦</span>
                <span>Dyed exclusively with madder root, indigo, and pomegranate rind</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--boho-walnut)' }}>
                <span style={{ color: 'var(--boho-terracotta)' }}>✦</span>
                <span>Crafted to patina richly across decades of daily family use</span>
              </div>
            </div>

            <a href="#collections" className="boho-btn boho-btn-outline">
              <span>EXPLORE LIVING WARES</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
