export default function Home() {
  return (
    <div className="main-container">
      {/* SIDEBAR - Vertical Steps */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#4f46e5"/>
              <rect x="12" y="12" width="8" height="8" rx="2" fill="white"/>
            </svg>
          </div>
        </div>
        
        <div className="steps-vertical">
          <div className="step-item completed">
            <div className="step-icon-wrapper">
              <div className="step-icon green">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16 6L8 14L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-line"></div>
            </div>
            <div className="step-content">
              <div className="step-label">STEP 1</div>
              <div className="step-title">Basic Details</div>
            </div>
          </div>

          <div className="step-item completed">
            <div className="step-icon-wrapper">
              <div className="step-icon green">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16 6L8 14L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-line"></div>
            </div>
            <div className="step-content">
              <div className="step-label">STEP 2</div>
              <div className="step-title">Company Details</div>
            </div>
          </div>

          <div className="step-item active">
            <div className="step-icon-wrapper">
              <div className="step-icon blue">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="6" y="6" width="8" height="8" rx="1.5" fill="white"/>
                </svg>
              </div>
              <div className="step-line"></div>
            </div>
            <div className="step-content">
              <div className="step-label">STEP 3</div>
              <div className="step-title">Subscription plan</div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-icon-wrapper">
              <div className="step-icon gray">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <text x="10" y="14" fontSize="14" fill="#9ca3af" textAnchor="middle" fontWeight="600">$</text>
                </svg>
              </div>
            </div>
            <div className="step-content">
              <div className="step-label">STEP 4</div>
              <div className="step-title gray">Payment details</div>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="contact-button">
            <div className="question-icon">?</div>
            <div className="contact-content">
              <div className="contact-label">Having troubles?</div>
              <div className="contact-link">Contact us</div>
            </div>
          </div>
          <div className="decorative-image">
            <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
              <path d="M20 140L60 80L100 140H20Z" fill="#5b6fd8" opacity="0.6"/>
              <path d="M40 140L60 100L80 140H40Z" fill="#4f5fd1" opacity="0.7"/>
              <path d="M50 140L60 115L70 140H50Z" fill="#4353ca" opacity="0.8"/>
              <rect x="55" y="0" width="10" height="120" fill="#7c8ce3" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </div>

      {/* HORIZONTAL STEPPER */}
      <div className="stepper-horizontal">
        <div className="stepper-step completed">
          <div className="stepper-icon green">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16 6L8 14L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stepper-line completed"></div>
          <div className="stepper-content">
            <div className="stepper-label">STEP 1</div>
            <div className="stepper-title">Card Details</div>
            <div className="stepper-status green">Completed</div>
          </div>
        </div>

        <div className="stepper-step completed">
          <div className="stepper-icon green">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16 6L8 14L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stepper-line completed"></div>
          <div className="stepper-content">
            <div className="stepper-label">STEP 2</div>
            <div className="stepper-title">Form Review</div>
            <div className="stepper-status green">Completed</div>
          </div>
        </div>

        <div className="stepper-step active">
          <div className="stepper-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="white"/>
            </svg>
          </div>
          <div className="stepper-line"></div>
          <div className="stepper-content">
            <div className="stepper-label">STEP 3</div>
            <div className="stepper-title">Authenticate OTP</div>
            <div className="stepper-status blue">In Progress</div>
          </div>
        </div>

        <div className="stepper-step">
          <div className="stepper-icon gray">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="8" y="8" width="8" height="8" rx="1" stroke="#d1d5db" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stepper-content">
            <div className="stepper-label">STEP 4</div>
            <div className="stepper-title gray">Create Code</div>
            <div className="stepper-status gray">Pending</div>
          </div>
        </div>
      </div>

      {/* CENTER COLUMN - Blue Card + White Card */}
      <div className="center-column">
        {/* BLUE CARD */}
        <div className="card-blue">
          <div className="card-blue-steps">
            <div className="blue-step completed">
              <div className="blue-step-icon green">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M14 5L7 12L4 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="blue-step-line"></div>
              <div className="blue-step-content">
                <div className="blue-step-title">Card Details</div>
                <div className="blue-badge green">Completed</div>
              </div>
            </div>

            <div className="blue-step active">
              <div className="blue-step-icon blue-light">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="4" fill="white"/>
                </svg>
              </div>
              <div className="blue-step-content">
                <div className="blue-step-title">Form Review</div>
                <div className="blue-badge blue">In Progress</div>
              </div>
            </div>
          </div>
          <div className="card-blue-description">
            Application and forms will go through a step by step review process.
          </div>
        </div>

        {/* WHITE CARD - Application Review */}
        <div className="card-white">
          <div className="card-white-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#e0e7ff"/>
              <circle cx="24" cy="24" r="14" fill="#4f46e5"/>
              <circle cx="24" cy="24" r="8" fill="white"/>
            </svg>
          </div>
          <div className="card-white-content">
            <div className="card-white-label">STEP 4</div>
            <div className="card-white-title">Application Review</div>
            <div className="card-white-description">
              Application and forms will go through a step by step review process.
            </div>
            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-label">TIME REMAINING</span>
                <span className="progress-time">48 hours</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT FORM */}
      <div className="payment-form">
        <div className="form-header-section">
          <div className="form-icon-circle">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#e0e7ff"/>
              <circle cx="25" cy="25" r="17" fill="#5b5ff9"/>
              <circle cx="25" cy="25" r="10" fill="white"/>
            </svg>
          </div>
          <div className="form-header-text">
            <div className="form-step-number">STEP 4 / 5</div>
            <div className="form-main-title">Payment Details</div>
          </div>
        </div>

        <div className="form-divider"></div>

        <div className="form-body">
          <div className="form-section-block">
            <div className="form-section-header">CARD DETAILS</div>
            <input type="text" className="form-field" value="Alex Parkinson" readOnly />
            <div className="card-input-wrapper">
              <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
                <rect width="28" height="18" rx="3" fill="#1e3a8a"/>
                <rect x="3" y="3" width="22" height="12" rx="2" fill="#3b82f6"/>
              </svg>
              <input type="text" className="form-field-inline" value="4858 3445 |" readOnly />
            </div>
            <div className="form-row-fields">
              <input type="text" className="form-field" placeholder="Expiry" />
              <input type="text" className="form-field" placeholder="CVV" />
            </div>
          </div>

          <div className="form-section-block">
            <div className="form-section-header">BILLING ADDRESS</div>
            <input type="text" className="form-field" placeholder="Street Address" />
            <div className="form-row-fields">
              <input type="text" className="form-field" placeholder="City" />
              <input type="text" className="form-field" placeholder="State" />
            </div>
          </div>
        </div>

        <div className="form-button-group">
          <button className="form-btn-prev">
            <span>←</span> Previous
          </button>
          <button className="form-btn-next">
            Next <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
