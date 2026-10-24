import { useState } from 'react';
import { StudioLogoMark } from './VectorArtAssets';

export default function Navbar({ onOpenInquiry }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="nav-bar">
      <div className="container nav-inner">
        <a href="#" className="brand-link" aria-label="Form and Fable Homepage">
          <StudioLogoMark size={36} />
          <span>FORM &amp; FABLE</span>
        </a>

        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <li className="nav-link-item">
            <a href="#work" onClick={closeMobile}>Selected Work</a>
          </li>
          <li className="nav-link-item">
            <a href="#services" onClick={closeMobile}>Services</a>
          </li>
          <li className="nav-link-item">
            <a href="#about" onClick={closeMobile}>Approach</a>
          </li>
          <li className="nav-link-item">
            <a href="#scope-builder" onClick={closeMobile}>Project Estimator</a>
          </li>
          {mobileOpen && (
            <li style={{ marginTop: '8px' }}>
              <button 
                type="button" 
                className="btn btn-coral btn-sm" 
                style={{ width: '100%' }}
                onClick={() => {
                  closeMobile();
                  onOpenInquiry();
                }}
              >
                Start a Project
              </button>
            </li>
          )}
        </ul>

        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-coral btn-sm"
            onClick={onOpenInquiry}
          >
            Start a Project
          </button>
          
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#121620" strokeWidth="2.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
