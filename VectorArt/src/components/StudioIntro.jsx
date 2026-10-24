import { StudioAnatomyArt } from './VectorArtAssets';

export default function StudioIntro() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="pill-badge yellow">The Studio Ethos</span>
            <h2 style={{ marginTop: '16px' }}>The power of the decisive line.</h2>
            <p>
              We believe the most enduring visual ideas are not born from endless ornament, but from the radical reduction of complexity. In an era saturated with visual noise, a deliberate silhouette cuts through instantly.
            </p>
            <p>
              At Form &amp; Fable, every Bézier curve has an architectural reason to exist. We balance rigorous Euclidean precision with playful, human storytelling to create visual identities that remain distinct across any scale—from a 16px mobile favicon to a ten-story architectural mural.
            </p>

            <div className="about-principles">
              <div className="about-principle-card">
                <h4>Silhouette First</h4>
                <p>If a shape cannot be identified purely in solid black, no amount of decoration will save it.</p>
              </div>
              <div className="about-principle-card">
                <h4>Deliberate Palettes</h4>
                <p>Controlled color blocking where every hue serves a structural purpose in the composition.</p>
              </div>
              <div className="about-principle-card">
                <h4>Infinite Fidelity</h4>
                <p>Pure mathematical vector precision ensuring razor-sharp reproduction across print and code.</p>
              </div>
              <div className="about-principle-card">
                <h4>Human Soul</h4>
                <p>Hand-crafted geometry infused with narrative warmth, curiosity, and cultural depth.</p>
              </div>
            </div>
          </div>

          <div className="about-visual-box">
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="pill-badge cobalt">Vector Anatomy</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-ink-muted)' }}>FIGURE 01: BEZIER LOGIC</span>
            </div>
            <StudioAnatomyArt />
          </div>
        </div>
      </div>
    </section>
  );
}
