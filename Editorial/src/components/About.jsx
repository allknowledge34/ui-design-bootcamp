export function About() {
  return (
    <section id="about" className="about-section">
      <div className="editorial-container">
        <div className="editorial-section-header">
          <span className="editorial-section-num">03 // ABOUT</span>
          <h2 className="editorial-section-title">The Atelier Philosophy</h2>
          <span className="editorial-meta-tag">FOUNDED ON DISCIPLINE</span>
        </div>

        <div className="about-split-grid">
          <div className="about-pullquote-col">
            <blockquote className="about-pullquote">
              &ldquo;Good design is not the accumulation of ornament, but the deliberate reduction of noise until only clarity and intent remain.&rdquo;
            </blockquote>
            <span className="editorial-meta-tag editorial-meta-vermilion">
              ATELIER MANIFESTO // THESIS 01
            </span>
          </div>

          <div className="about-essay-col">
            <p className="about-essay-lead">
              Verve Atelier operates as an independent design and software engineering practice at the intersection of print editorial tradition and modern digital architecture.
            </p>

            <p className="about-essay-body">
              We reject the interchangeable aesthetics of modern templates. Our commissions are treated with the curatorial precision of fine bookmaking: conscious typography, deliberate hierarchy, generous whitespace, and rigorously tested software infrastructure.
            </p>

            <p className="about-essay-body">
              Every engagement is led directly by principal designers and senior software engineers. We do not maintain account managers, junior production pools, or speculative sales funnels. Clients work directly with the craftsmen accountable for their systems.
            </p>

            <div className="about-signature-block">
              <div>
                <span className="editorial-meta-tag">PRACTICE LEADERSHIP</span>
                <div style={{ fontSize: '1rem', fontWeight: '800', marginTop: '4px' }}>
                  Adrian Vance &bull; Principal Architect
                </div>
              </div>

              <div>
                <span className="editorial-meta-tag">STUDIO LOCATION</span>
                <div style={{ fontSize: '1rem', fontWeight: '800', marginTop: '4px' }}>
                  San Francisco &bull; Established 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
