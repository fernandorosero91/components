export default function Home() {
  return (
    <div className="main-container">
      {/* SIDEBAR - Vertical Steps */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="10" fill="#5b5ff9"/>
              <circle cx="22" cy="22" r="7" fill="white"/>
            </svg>
          </div>
        </div>
        
        <div className="steps-vertical">
          <div className="step-item completed">
            <div className="step-icon-wrapper">
              <div className="step-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 7L10 15L6 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 7L10 15L6 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="9" width="4" height="9" rx="1" fill="white"/>
                  <rect x="13" y="7" width="4" height="11" rx="1" fill="white"/>
                </svg>
              </div>
              <div className="step-line gray"></div>
            </div>
            <div className="step-content">
              <div className="step-label">STEP 3</div>
              <div className="step-title">Subscription plan</div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-icon-wrapper">
              <div className="step-icon gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <text x="12" y="16" fontSize="16" fill="#9ca3af" textAnchor="middle" fontWeight="700">$</text>
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
            <svg width="160" height="240" viewBox="0 0 160 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Rectángulo vertical superior - azul claro */}
              <rect x="90" y="0" width="70" height="140" fill="#a8b8dc" opacity="0.55"/>
              
              {/* Línea diagonal principal en rectángulo superior */}
              <line x1="90" y1="0" x2="160" y2="140" stroke="#5568a8" strokeWidth="2.5" opacity="0.45"/>
              
              {/* Triángulo blanco superior izquierdo */}
              <path d="M50 120 L90 80 L90 140 Z" fill="#e8ecf4" opacity="0.85"/>
              
              {/* Línea en triángulo blanco superior */}
              <line x1="60" y1="110" x2="90" y2="80" stroke="#c5d0e8" strokeWidth="1.5" opacity="0.4"/>
              
              {/* Polígono medio derecho - azul medio */}
              <path d="M90 140 L160 140 L160 180 L110 180 Z" fill="#7a8bc4" opacity="0.75"/>
              
              {/* Línea diagonal en polígono medio */}
              <line x1="90" y1="140" x2="160" y2="180" stroke="#5568a8" strokeWidth="2.5" opacity="0.5"/>
              
              {/* Triángulo blanco medio izquierdo */}
              <path d="M40 180 L90 140 L110 180 Z" fill="#dde2ed" opacity="0.9"/>
              
              {/* Línea en triángulo blanco medio */}
              <line x1="55" y1="170" x2="90" y2="140" stroke="#b8c5d8" strokeWidth="1.5" opacity="0.35"/>
              
              {/* Polígono inferior derecho - azul oscuro */}
              <path d="M90 180 L160 180 L160 240 L90 240 Z" fill="#6075b5" opacity="0.85"/>
              
              {/* Línea diagonal en polígono inferior */}
              <line x1="90" y1="180" x2="160" y2="240" stroke="#4f5fa8" strokeWidth="2.5" opacity="0.55"/>
              
              {/* Triángulo inferior izquierdo claro */}
              <path d="M30 240 L90 180 L90 240 Z" fill="#c5d0e8" opacity="0.7"/>
              
              {/* Polígono de conexión central */}
              <path d="M55 170 L90 140 L90 180 L70 190 Z" fill="#8a9bd5" opacity="0.7"/>
              
              {/* Línea de detalle en conexión */}
              <line x1="70" y1="190" x2="90" y2="180" stroke="#6b80bd" strokeWidth="1.5" opacity="0.4"/>
              
              {/* Punto de intersección central */}
              <circle cx="90" cy="180" r="3" fill="#5568a8" opacity="0.7"/>
              
              {/* Líneas de detalle adicionales */}
              <line x1="110" y1="180" x2="130" y2="190" stroke="#5568a8" strokeWidth="1.5" opacity="0.35"/>
              <line x1="90" y1="210" x2="140" y2="220" stroke="#4f5fa8" strokeWidth="1.5" opacity="0.4"/>
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="6" y="9" width="8" height="7" rx="1" fill="white"/>
              <path d="M8 9V7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
              <rect x="6" y="6" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
              <rect x="11" y="6" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
              <rect x="6" y="11" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
              <rect x="11" y="11" width="3" height="3" rx="0.5" stroke="#9ca3af" strokeWidth="1.5"/>
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
                  <circle cx="9" cy="9" r="3" fill="white"/>
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
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#e0e7ff"/>
              <circle cx="25" cy="25" r="15" fill="#5b5ff9"/>
              <rect x="20" y="24" width="10" height="8" rx="1" fill="white"/>
              <path d="M22 24V21C22 19.3431 23.3431 18 25 18C26.6569 18 28 19.3431 28 21V24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="26" fill="#e0e7ff"/>
              <circle cx="26" cy="26" r="18" fill="#5b5ff9"/>
              <text x="26" y="32" fontSize="16" fill="white" textAnchor="middle" fontWeight="700">$</text>
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
