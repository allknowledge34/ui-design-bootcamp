import { Wallet, ArrowUp } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <div className="brand-lockup">
              <div className="brand-squircle">
                <Wallet size={18} className="brand-squircle-icon" />
              </div>
              <span className="brand-text">Tralance</span>
            </div>
            <p className="footer-tagline">
              Simple solutions for freelance finance. Track income, expenses, and project cashflow from your mobile device.
            </p>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-column">
              <span className="footer-heading">Product</span>
              <ul className="footer-links-list">
                <li><a href="#about" className="footer-nav-link">About</a></li>
                <li><a href="#features" className="footer-nav-link">Features</a></li>
                <li><a href="#showcase" className="footer-nav-link">Cashflow Radar</a></li>
                <li><a href="#get-started" className="footer-nav-link">Get the App</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="footer-heading">Workflow</span>
              <ul className="footer-links-list">
                <li><a href="#how-it-works" className="footer-nav-link">Client Setup</a></li>
                <li><a href="#how-it-works" className="footer-nav-link">Expense Logging</a></li>
                <li><a href="#how-it-works" className="footer-nav-link">Payment Status</a></li>
                <li><a href="#about" className="footer-nav-link">Mobile Apps</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Tralance Inc. All rights reserved.
          </span>

          <button onClick={scrollToTop} className="scroll-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
