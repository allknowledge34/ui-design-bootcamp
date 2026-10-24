import { useState } from 'react'
import { Wifi, Battery, CreditCard, ShoppingBag, Laptop, Car, ArrowUpRight } from 'lucide-react'

const IMAGE_PATH = '/images/tralance-preview.png'

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageErrored, setImageErrored] = useState(false)

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Manage your finance easily with Tralance.
          </h1>
          <p className="hero-subtitle">
            Carry your financial clarity in your pocket with the easiest and most secure freelance tracking app you will ever use.
          </p>

          <div className="hero-badges">
            <a href="#get-started" className="store-badge" aria-label="Download on the App Store">
              <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76.99.08 2.03-.5 2.68-1.26z"/>
              </svg>
              <div className="store-text">
                <span className="store-sub">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>

            <a href="#get-started" className="store-badge" aria-label="Get it on Google Play">
              <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.378-.404-.61-.97-.61-1.636V3.45c0-.666.232-1.232.61-1.636zm11.246 11.248l2.091 2.091-11.45 6.611 9.359-8.702zm0-2.124L5.496 2.236l11.45 6.611-2.091 2.091zm1.486 1.062l3.414 1.971c.974.562.974 1.479 0 2.041l-3.414 1.971-2.34-2.34 2.34-2.34z"/>
              </svg>
              <div className="store-text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="aura-backdrop" aria-hidden="true">
            <div className="scallop-ring"></div>
            <div className="scallop-ring-inner"></div>
          </div>

          <div className="phone-device">
            <div className="phone-island">
              <div className="phone-camera"></div>
              <div className="phone-mic"></div>
            </div>

            <div className="phone-screen">
              {!imageErrored && (
                <img
                  src={IMAGE_PATH}
                  alt="Tralance live app screenshot"
                  className="phone-custom-image"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageErrored(true)}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                />
              )}

              {(!imageLoaded || imageErrored) && (
                <div className="mock-ui">
                  <div className="mock-status-bar">
                    <span className="mock-time">9:41</span>
                    <div className="mock-status-icons">
                      <Wifi size={13} strokeWidth={2.5} />
                      <Battery size={15} strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="mock-banner">
                    <span className="mock-banner-text">You can check your cards here.</span>
                  </div>

                  <div className="mock-card">
                    <div className="mock-card-top">
                      <div className="mock-card-balance">
                        <span className="mock-balance-label">Total Balance</span>
                        <span className="mock-balance-val">$3,300.00</span>
                      </div>
                      <div className="mock-card-network">
                        <span className="circle-red"></span>
                        <span className="circle-yellow"></span>
                      </div>
                    </div>
                    <div className="mock-card-bottom">
                      <span className="mock-card-num">•••• •••• 2476</span>
                      <span className="mock-card-exp">08/29</span>
                    </div>
                  </div>

                  <div className="mock-list">
                    <div className="mock-item">
                      <div className="mock-item-left">
                        <span className="mock-item-icon color-blue">
                          <Car size={14} />
                        </span>
                        <div>
                          <p className="mock-item-title">Auto & transport</p>
                          <p className="mock-item-sub">Client meetings</p>
                        </div>
                      </div>
                      <span className="mock-item-price">$100</span>
                    </div>

                    <div className="mock-item">
                      <div className="mock-item-left">
                        <span className="mock-item-icon color-purple">
                          <Laptop size={14} />
                        </span>
                        <div>
                          <p className="mock-item-title">Design tools</p>
                          <p className="mock-item-sub">Monthly license</p>
                        </div>
                      </div>
                      <span className="mock-item-price">$350</span>
                    </div>

                    <div className="mock-item">
                      <div className="mock-item-left">
                        <span className="mock-item-icon color-green">
                          <CreditCard size={14} />
                        </span>
                        <div>
                          <p className="mock-item-title">Auto Insurance</p>
                          <p className="mock-item-sub">Quarterly premium</p>
                        </div>
                      </div>
                      <span className="mock-item-price">$250</span>
                    </div>
                  </div>

                  <div className="mock-transactions">
                    <div className="mock-trans-header">
                      <span>Recent Transactions</span>
                      <ArrowUpRight size={13} />
                    </div>
                    <div className="mock-trans-item">
                      <div className="mock-trans-left">
                        <span className="mock-trans-icon">
                          <ShoppingBag size={13} />
                        </span>
                        <span className="mock-trans-name">Office Shopping</span>
                      </div>
                      <span className="mock-trans-amt">-$120</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
