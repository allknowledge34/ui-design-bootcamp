export function BrandStory() {
  return (
    <section id="story" className="story-section">
      <div className="boho-container">
        <div className="story-asymmetric-grid">
          <div>
            <span className="section-botanical-tag" style={{ color: 'var(--boho-rust)' }}>
              ✦ OUR ETHOS // SLOW LIVING
            </span>
            <blockquote className="story-pullquote">
              &ldquo;A home should feel gathered over time, guided by intuition rather than mass-market trends.&rdquo;
            </blockquote>
            <div className="boho-badge-pill" style={{ backgroundColor: 'var(--boho-cream)' }}>
              ETHICALLY SOURCED ACROSS 12 ARTISAN VILLAGES
            </div>
          </div>

          <div className="story-narrative-col">
            <p>
              At Soulful Living, we partner directly with multigenerational potters, weavers, and botanical stewards. We believe the objects we inhabit should carry the warmth of human touch, the slight irregularities of wood ash glazes, and the honest scent of washed linen.
            </p>

            <p>
              Every production batch is kept small and intentional. We reject petrochemical coatings, synthetic fixatives, and mass industrial speed. What remains are resilient, soulful pieces that mature gracefully alongside your daily rituals.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-soft)', fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--boho-walnut)' }}>
              <div>&bull; ZERO PLASTIC PACKAGING</div>
              <div>&bull; RECLAIMED EARTHENWARE CLAYS</div>
              <div>&bull; DIRECT FAIR-WAGE TRADE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
