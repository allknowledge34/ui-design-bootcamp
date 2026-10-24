import { useState } from 'react';
import { StudioLogoMark } from './VectorArtAssets';

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      if (onShowToast) {
        onShowToast('Subscribed to the Form & Fable Dispatch.');
      }
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <StudioLogoMark size={32} />
              <span className="footer-logo">FORM &amp; FABLE</span>
            </div>
            <p className="footer-tagline">
              An independent creative studio dedicated to pure vector craft, distinctive silhouettes, and authentic narrative clarity.
            </p>
            <div style={{ fontSize: '0.8125rem', color: '#9BA3B8', lineHeight: '1.6', marginTop: '8px' }}>
              <strong>Stockholm:</strong> Södermalm Atelier, Sweden<br />
              <strong>New York:</strong> Greenpoint Studio, Brooklyn, USA
            </div>
          </div>

          <div className="footer-col">
            <h4>Index</h4>
            <ul>
              <li><a href="#work">Selected Work</a></li>
              <li><a href="#services">Creative Services</a></li>
              <li><a href="#about">Studio Philosophy</a></li>
              <li><a href="#scope-builder">Scope Estimator</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Disciplines</h4>
            <ul>
              <li><a href="#services">Brand Identity Systems</a></li>
              <li><a href="#services">Editorial Illustration</a></li>
              <li><a href="#services">Visual Campaigns</a></li>
              <li><a href="#services">Spatial &amp; Packaging</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Studio Dispatch</h4>
            <p style={{ fontSize: '0.84rem', color: '#9BA3B8', marginBottom: '14px', lineHeight: '1.5' }}>
              A quarterly publication on visual culture, vector geometry, and studio process.
            </p>
            {subscribed ? (
              <div style={{ padding: '10px 14px', backgroundColor: '#1E3BB3', borderRadius: '6px', fontSize: '0.8125rem', fontWeight: 700 }}>
                ✓ You are on the dispatch list.
              </div>
            ) : (
              <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-yellow btn-sm" style={{ borderRadius: 0, boxShadow: 'none', border: 'none' }}>
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Form &amp; Fable Studio AB. All shapes drawn with intention.
          </div>
          <div className="footer-bottom-links">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
