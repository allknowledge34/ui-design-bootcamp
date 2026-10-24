import { Download, User, CreditCard, ChevronRight } from 'lucide-react'

const IMAGE_PATH = '/images/tralance-preview.png'

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Download the App',
      icon: <Download size={18} />
    },
    {
      num: '02',
      title: 'Create Your Account',
      icon: <User size={18} />
    },
    {
      num: '03',
      title: 'Start Managing Money',
      icon: <CreditCard size={18} />
    }
  ]

  return (
    <section className="clay-workflow-section" id="how-it-works">
      <div className="clay-container workflow-grid-two-col">
        <div className="workflow-mockups-col">
          <div className="mockups-stack-wrap">
            <div className="stacked-card-phone phone-back">
              <div className="mini-phone-notch"></div>
              <img src={IMAGE_PATH} alt="Tralance preview" className="mini-phone-img" />
            </div>

            <div className="stacked-card-phone phone-front">
              <div className="mini-phone-notch"></div>
              <img src={IMAGE_PATH} alt="Tralance preview" className="mini-phone-img" />
            </div>

            <div className="stacked-credit-card">
              <div className="credit-card-chip"></div>
              <span className="credit-card-brand">TRALANCE</span>
            </div>
          </div>
        </div>

        <div className="workflow-content-col">
          <h2 className="section-title-chunky">How It Works</h2>
          <p className="section-sub-clean">Get started in minutes.</p>

          <div className="steps-flow-row">
            {steps.map((s, idx) => (
              <div key={s.num} className="step-flow-wrapper">
                <div className="step-node-item">
                  <div className="step-num-bubble">
                    <span>{s.num}</span>
                  </div>
                  <div className="clay-icon-socket step-icon-socket">
                    {s.icon}
                  </div>
                  <span className="step-node-label">{s.title}</span>
                </div>

                {idx < steps.length - 1 && (
                  <div className="step-flow-arrow" aria-hidden="true">
                    <ChevronRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
