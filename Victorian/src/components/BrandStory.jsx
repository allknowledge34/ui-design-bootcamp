export function BrandStory() {
  return (
    <section id="story" className="story-section">
      <div className="victorian-container">
        <div className="story-panel-box">
          <div className="flourish-corner flourish-tl" />
          <div className="flourish-corner flourish-tr" />
          <div className="flourish-corner flourish-bl" />
          <div className="flourish-corner flourish-br" />

          <div style={{ marginBottom: '16px' }}>
            <span style={{ color: '#E5CCA2', fontFamily: 'Cinzel, serif', fontSize: '0.78rem', letterSpacing: '0.18em' }}>
              OUR TIME-HONOURED HERITAGE
            </span>
          </div>

          <h2 className="story-headline">
            AN ENDURING DEVOTION TO UNCOMPROMISING MASTERY
          </h2>

          <div className="section-ornament-divider" style={{ color: '#E5CCA2' }}>
            <span style={{ backgroundColor: '#E5CCA2' }} />
            <span>❖</span>
            <span style={{ backgroundColor: '#E5CCA2' }} />
          </div>

          <p className="story-body-text">
            For more than a century, Royal Heritage has operated on a singular tenet: that true luxury resides in patience, unhurried hand-craftsmanship, and unquestionable lineage. We collaborate directly with private estates, titled patrons, and scholarly antiquarians to preserve Britain&apos;s finest decorative treasures.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontFamily: 'Cinzel, serif', fontSize: '0.78rem', letterSpacing: '0.14em', color: '#E5CCA2' }}>
            <div>&bull; MUSEUM CONSERVATION STANDARDS</div>
            <div>&bull; STRICT PROVENANCE ARCHIVING</div>
            <div>&bull; CONFIDENTIAL ESTATE CURATION</div>
          </div>
        </div>
      </div>
    </section>
  )
}
