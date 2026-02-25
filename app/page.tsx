export default function Home() {
  return (
    <div className="main-container">
      <aside className="sidebar">
        <header className="sidebar-header">
          <figure className="sidebar-logo">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="10" fill="#5b5ff9"/>
              <circle cx="22" cy="22" r="7" fill="white"/>
            </svg>
          </figure>
        </header>
        
        <nav className="steps-vertical">
          <article className="step-item completed">
            <figure className="step-icon-wrapper">
              <i className="step-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 7L10 15L6 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </i>
              <i className="step-line"></i>
            </figure>
            <section className="step-content">
              <small className="step-label">STEP 1</small>
              <h3 className="step-title">Basic Details</h3>
            </section>
          </article>

          <article className="step-item completed">
            <figure className="step-icon-wrapper">
              <i className="step-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 7L10 15L6 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </i>
              <i className="step-line"></i>
            </figure>
            <section className="step-content">
              <small className="step-label">STEP 2</small>
              <h3 className="step-title">Company Details</h3>
            </section>
          </article>

          <article className="step-item active">
            <figure className="step-icon-wrapper">
              <i className="step-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="9" width="4" height="9" rx="1" fill="white"/>
                  <rect x="13" y="7" width="4" height="11" rx="1" fill="white"/>
                </svg>
              </i>
              <i className="step-line gray"></i>
            </figure>
            <section className="step-content">
              <small className="step-label">STEP 3</small>
              <h3 className="step-title">Subscription plan</h3>
            </section>
          </article>

          <article className="step-item">
            <figure className="step-icon-wrapper">
              <i className="step-icon gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <text x="12" y="16" fontSize="16" fill="#9ca3af" textAnchor="middle" fontWeight="700">$</text>
                </svg>
              </i>
            </figure>
            <section className="step-content">
              <small className="step-label">STEP 4</small>
              <h3 className="step-title gray">Payment details</h3>
            </section>
          </article>
        </nav>

        <footer className="sidebar-footer">
          <button className="contact-button">
            <i className="question-icon">?</i>
            <section className="contact-content">
              <small className="contact-label">Having troubles?</small>
              <strong className="contact-link">Contact us</strong>
            </section>
          </button>
          <figure className="decorative-image">
            <svg width="160" height="240" viewBox="0 0 160 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="90" y="0" width="70" height="140" fill="#a8b8dc" opacity="0.55"/>
              <line x1="90" y1="0" x2="160" y2="140" stroke="#5568a8" strokeWidth="2.5" opacity="0.45"/>
              <path d="M50 120 L90 80 L90 140 Z" fill="#e8ecf4" opacity="0.85"/>
              <line x1="60" y1="110" x2="90" y2="80" stroke="#c5d0e8" strokeWidth="1.5" opacity="0.4"/>
              <path d="M90 140 L160 140 L160 180 L110 180 Z" fill="#7a8bc4" opacity="0.75"/>
              <line x1="90" y1="140" x2="160" y2="180" stroke="#5568a8" strokeWidth="2.5" opacity="0.5"/>
              <path d="M40 180 L90 140 L110 180 Z" fill="#dde2ed" opacity="0.9"/>
              <line x1="55" y1="170" x2="90" y2="140" stroke="#b8c5d8" strokeWidth="1.5" opacity="0.35"/>
              <path d="M90 180 L160 180 L160 240 L90 240 Z" fill="#6075b5" opacity="0.85"/>
              <line x1="90" y1="180" x2="160" y2="240" stroke="#4f5fa8" strokeWidth="2.5" opacity="0.55"/>
              <path d="M30 240 L90 180 L90 240 Z" fill="#c5d0e8" opacity="0.7"/>
              <path d="M55 170 L90 140 L90 180 L70 190 Z" fill="#8a9bd5" opacity="0.7"/>
              <line x1="70" y1="190" x2="90" y2="180" stroke="#6b80bd" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="90" cy="180" r="3" fill="#5568a8" opacity="0.7"/>
              <line x1="110" y1="180" x2="130" y2="190" stroke="#5568a8" strokeWidth="1.5" opacity="0.35"/>
              <line x1="90" y1="210" x2="140" y2="220" stroke="#4f5fa8" strokeWidth="1.5" opacity="0.4"/>
            </svg>
          </figure>
        </footer>
      </aside>

      <nav className="stepper-horizontal">
        <article className="stepper-step completed">
          <i className="stepper-icon green">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16 6L8 14L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </i>
          <i className="stepper-line completed"></i>
          <section className="stepper-content">
            <small className="stepper-label">STEP 1</small>
            <h3 className="stepper-title">Card Details</h3>
            <em className="stepper-status green">Completed</em>
          </section>
        </article>

        <article className="stepper-step completed">
          <i className="stepper-icon green">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16 6L8 14L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </i>
          <i className="stepper-line completed"></i>
          <section className="stepper-content">
            <small className="stepper-label">STEP 2</small>
            <h3 className="stepper-title">Form Review</h3>
            <em className="stepper-status green">Completed</em>
          </section>
        </article>

        <article className="stepper-step active">
          <i className="stepper-icon blue">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="6" y="9" width="8" height="7" rx="1" fill="white"/>
              <path d="M8 9V7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </i>
          <i className="stepper-line"></i>
          <section className="stepper-content">
            <small className="stepper-label">STEP 3</small>
            <h3 className="stepper-title">Authenticate OTP</h3>
            <em className="stepper-status blue">In Progress</em>
          </section>
        </article>

        <article className="stepper-step">
          <i className="stepper-icon gray">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="6" y="6" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
              <rect x="11" y="6" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
              <rect x="6" y="11" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
              <rect x="11" y="11" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
            </svg>
          </i>
          <section className="stepper-content">
            <small className="stepper-label">STEP 4</small>
            <h3 className="stepper-title gray">Create Code</h3>
            <em className="stepper-status gray">Pending</em>
          </section>
        </article>
      </nav>

      <section className="center-column">
        <article className="card-blue">
          <nav className="card-blue-steps">
            <section className="blue-step completed">
              <i className="blue-step-icon green">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M14 5L7 12L4 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </i>
              <i className="blue-step-line"></i>
              <section className="blue-step-content">
                <h4 className="blue-step-title">Card Details</h4>
                <em className="blue-badge green">Completed</em>
              </section>
            </section>

            <section className="blue-step active">
              <i className="blue-step-icon blue-light">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="white"/>
                </svg>
              </i>
              <section className="blue-step-content">
                <h4 className="blue-step-title">Form Review</h4>
                <em className="blue-badge blue">In Progress</em>
              </section>
            </section>
          </nav>
          <p className="card-blue-description">
            Application and forms will go through a step by step review process.
          </p>
        </article>

        <article className="card-white">
          <figure className="card-white-icon">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#e0e7ff"/>
              <circle cx="25" cy="25" r="15" fill="#5b5ff9"/>
              <rect x="20" y="24" width="10" height="8" rx="1" fill="white"/>
              <path d="M22 24V21C22 19.3431 23.3431 18 25 18C26.6569 18 28 19.3431 28 21V24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </figure>
          <section className="card-white-content">
            <small className="card-white-label">STEP 4</small>
            <h3 className="card-white-title">Application Review</h3>
            <p className="card-white-description">
              Application and forms will go through a step by step review process.
            </p>
            <section className="progress-container">
              <header className="progress-header">
                <small className="progress-label">TIME REMAINING</small>
                <strong className="progress-time">48 hours</strong>
              </header>
              <i className="progress-bar">
                <i className="progress-fill"></i>
              </i>
            </section>
          </section>
        </article>
      </section>

      <form className="payment-form">
        <header className="form-header-section">
          <figure className="form-icon-circle">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="26" fill="#e0e7ff"/>
              <circle cx="26" cy="26" r="18" fill="#5b5ff9"/>
              <text x="26" y="32" fontSize="16" fill="white" textAnchor="middle" fontWeight="700">$</text>
            </svg>
          </figure>
          <section className="form-header-text">
            <small className="form-step-number">STEP 4 / 5</small>
            <h2 className="form-main-title">Payment Details</h2>
          </section>
        </header>

        <hr className="form-divider" />

        <section className="form-body">
          <fieldset className="form-section-block">
            <legend className="form-section-header">CARD DETAILS</legend>
            <input type="text" className="form-field" value="Alex Parkinson" readOnly />
            <label className="card-input-wrapper">
              <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
                <rect width="28" height="18" rx="3" fill="#1e3a8a"/>
                <rect x="3" y="3" width="22" height="12" rx="2" fill="#3b82f6"/>
              </svg>
              <input type="text" className="form-field-inline" value="4858 3445 |" readOnly />
            </label>
            <section className="form-row-fields">
              <input type="text" className="form-field" placeholder="Expiry" />
              <input type="text" className="form-field" placeholder="CVV" />
            </section>
          </fieldset>

          <fieldset className="form-section-block">
            <legend className="form-section-header">BILLING ADDRESS</legend>
            <input type="text" className="form-field" placeholder="Street Address" />
            <section className="form-row-fields">
              <input type="text" className="form-field" placeholder="City" />
              <input type="text" className="form-field" placeholder="State" />
            </section>
          </fieldset>
        </section>

        <footer className="form-button-group">
          <button type="button" className="form-btn-prev">
            <i>←</i> Previous
          </button>
          <button type="submit" className="form-btn-next">
            Next <i>→</i>
          </button>
        </footer>
      </form>
    </div>
  );
}
