export default function Home() {
  return (
    <div className="main-container">
      {/* SIDEBAR - Vertical Steps */}
      <div className="sidebar">
        <div className="sidebar-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#4f46e5"/>
          </svg>
        </div>
        
        <div className="steps-vertical">
          <div className="step-item completed">
            <div className="step-icon-wrapper">
              <div className="step-icon green">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <path d="M13.5 4L6 11.5L2.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <path d="M13.5 4L6 11.5L2.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <rect x="4" y="4" width="8" height="8" rx="1" fill="white"/>
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <text x="8" y="12" fontSize="12" fill="#9ca3af" textAnchor="middle">$</text>
                </svg>
              </div>
            </div>
            <div className="step-content">
              <div className="step-label">STEP 4</div>
              <div className="step-title gray">Payment details</div>
            </div>
          </div>
        </div>

        <div className="contact-button">
          <span className="question-icon">?</span>
          <div>
            <div className="contact-label">Having troubles?</div>
            <div className="contact-link">Contact us</div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL STEPPER */}
      <div className="stepper-horizontal">
        <div className="stepper-step completed">
          <div className="stepper-icon green">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M13.5 4L6 11.5L2.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M13.5 4L6 11.5L2.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <circle cx="10" cy="10" r="4" fill="white"/>
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="6" y="6" width="8" height="8" rx="1" stroke="#d1d5db" strokeWidth="2"/>
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
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <circle cx="7" cy="7" r="3" fill="white"/>
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
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#e0e7ff"/>
              <circle cx="16" cy="16" r="10" fill="#4f46e5"/>
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
        <div className="form-header">
          <div className="form-step-indicator">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="20" fill="#e0e7ff"/>
              <text x="20" y="26" fontSize="16" fill="#4f46e5" textAnchor="middle" fontWeight="600">$</text>
            </svg>
          </div>
          <div className="form-header-content">
            <div className="form-step-label">STEP 4 / 5</div>
            <div className="form-title">Payment Details</div>
          </div>
        </div>
        <div className="form-progress-line"></div>

        <div className="form-section">
          <div className="form-section-title">CARD DETAILS</div>
          <div className="form-group">
            <input type="text" className="form-input" value="Alex Parkinson" readOnly />
          </div>
          <div className="form-group">
            <div className="card-number-input">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                <rect width="24" height="16" rx="2" fill="#1e40af"/>
                <rect x="2" y="2" width="20" height="12" rx="1" fill="#3b82f6"/>
              </svg>
              <input type="text" className="form-input-inline" value="4858 3445 |" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half">
              <input type="text" className="form-input" placeholder="Expiry" />
            </div>
            <div className="form-group half">
              <input type="text" className="form-input" placeholder="CVV" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">BILLING ADDRESS</div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Street Address" />
          </div>
          <div className="form-row">
            <div className="form-group half">
              <input type="text" className="form-input" placeholder="City" />
            </div>
            <div className="form-group half">
              <input type="text" className="form-input" placeholder="State" />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn-secondary">
            <span>←</span> Previous
          </button>
          <button className="btn-primary">
            Next <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
