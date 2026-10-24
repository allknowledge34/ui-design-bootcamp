import { useState } from 'react'
import { ArrowRight, ArrowDown, DollarSign, Wifi, Shield, Sliders } from 'lucide-react'

const IMAGE_PATH = '/images/tralance-preview.png'

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [toggleActive, setToggleActive] = useState(true)

  return (
    <section className="hero-section" id="about">
      <div className="aurora-mesh" aria-hidden="true">
        <div className="mesh-gradient-blob blob-purple"></div>
        <div className="mesh-gradient-blob blob-amber"></div>
        <div className="mesh-gradient-blob blob-cyan"></div>
      </div>

      <div className="hero-layout-container">
        <div className="hero-left-pane">

          <h1 className="hero-title-stack">
            <span className="title-word">Simple</span>
            <span className="title-word">solutions</span>
            <span className="title-word">for freelance</span>
          </h1>

          <p className="hero-lead-paragraph">
            Take control of all your freelance income and expenses using only your mobile phone.
          </p>

          <div className="hero-action-row">
            <a href="#get-started" className="btn-black-pill btn-hero-cta">
              <span>Get the App</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <a href="#features" className="scroll-glass-circle" aria-label="Scroll to features">
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className="hero-right-pane">
          <div className="glass-circular-portal">
            <div className="portal-glass-disc">
              <div className="portal-phone-shell">
                <div className="phone-island-pill"></div>

                <div className="phone-viewport">
                  {!imgError && (
                    <img
                      src={IMAGE_PATH}
                      alt="Tralance freelance financial app"
                      className="portal-screen-image"
                      onLoad={() => setImgLoaded(true)}
                      onError={() => setImgError(true)}
                      style={{ display: imgLoaded ? 'block' : 'none' }}
                    />
                  )}

                  {(!imgLoaded || imgError) && (
                    <div className="portal-screen-fallback">
                      <div className="screen-fallback-status">
                        <span>9:41</span>
                        <span>5G</span>
                      </div>
                      <div className="screen-fallback-hero">
                        <span className="fallback-hero-label">Total Balance</span>
                        <span className="fallback-hero-val">$14,250.00</span>
                      </div>
                      <div className="screen-fallback-list">
                        <div className="screen-fallback-item">
                          <span>Apex Studio Retainer</span>
                          <span className="text-emerald">+$6,500</span>
                        </div>
                        <div className="screen-fallback-item">
                          <span>Cloud Workspace</span>
                          <span className="text-slate">-$180</span>
                        </div>
                        <div className="screen-fallback-item">
                          <span>Design Retainer</span>
                          <span className="text-emerald">+$4,850</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="float-glass-widget widget-slider">
              <div className="widget-slider-header">
                <Sliders size={14} className="slider-icon" />
                <span className="slider-label">Tax Reserve</span>
              </div>
              <div className="rainbow-slider-track">
                <div className="rainbow-slider-thumb"></div>
              </div>
            </div>

            <div className="float-glass-widget widget-lamp">
              <div className="widget-left-group">
                <div className="widget-icon-box">
                  <DollarSign size={15} />
                </div>
                <div>
                  <p className="widget-primary-text">Income Wire</p>
                  <p className="widget-status-text">
                    <span className="status-dot dot-online"></span>
                    <span>Cleared</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                className={`glass-switch-toggle ${toggleActive ? 'is-on' : ''}`}
                onClick={() => setToggleActive(!toggleActive)}
                aria-label="Toggle income notification"
              >
                <span className="switch-slider-knob"></span>
              </button>
            </div>

            <div className="float-glass-widget widget-router">
              <div className="widget-icon-box">
                <Wifi size={15} />
              </div>
              <div>
                <p className="widget-primary-text">Apex Retainer</p>
                <p className="widget-status-text">
                  <span className="status-dot dot-online"></span>
                  <span>Active</span>
                </p>
              </div>
            </div>

            <div className="float-glass-widget widget-ac">
              <div className="widget-icon-box">
                <Shield size={15} />
              </div>
              <div>
                <p className="widget-primary-text">Tax Shield</p>
                <p className="widget-status-text">
                  <span className="status-dot dot-online"></span>
                  <span>88% Deductible</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
