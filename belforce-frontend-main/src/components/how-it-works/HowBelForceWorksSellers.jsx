function HowBelForceWorksSellers() {
  const steps = [
    {
      id: 1,
      label: 'STEP 1',
      title: 'Login',
      description: 'Sign in with your name and phone number.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
      ),
    },
    {
      id: 2,
      label: 'STEP 2',
      title: 'Select Item',
      description: 'Pick Mobile, Laptop, or Other and add basic details.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      id: 3,
      label: 'STEP 3',
      title: 'Instant Price Suggestion',
      description: 'We provide a competitive, probable best price automatically.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      id: 4,
      label: 'STEP 4',
      title: 'Confirm Pickup',
      description: 'Agree to the price and book a pickup.',
      chips: [
        { text: 'Free for Members', variant: 'green', icon: 'leaf' },
        { text: 'Others: Paid pickup', variant: 'grey' },
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      label: 'STEP 5',
      title: 'Pickup & Deposit',
      description: 'We collect the item and verify condition; payout in 3-5 days.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      id: 6,
      label: 'STEP 6',
      finalLabel: 'FINAL STEP',
      title: 'Payout to Wallet',
      description: 'Funds appear in your in-app wallet; withdraw to UPI or bank.',
      isFinal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
          <path d="M7 15h.01" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="how-belforce-sellers">
      <div className="how-belforce-sellers__card">
        <header className="how-belforce-sellers__header">
          <h2 className="how-belforce-sellers__title">How BelForce Works — Sellers</h2>
          <p className="how-belforce-sellers__subtitle">Sell quickly, safely, and get paid — here&apos;s how.</p>
        </header>

        <ul className="how-belforce-sellers__steps">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={`how-belforce-sellers__step ${step.isFinal ? 'how-belforce-sellers__step--final' : ''}`}
            >
              <div className="how-belforce-sellers__step-inner">
                <div className="how-belforce-sellers__step-icon-wrap">
                  <div className="how-belforce-sellers__step-icon">{step.icon}</div>
                  {!step.isFinal && index < steps.length - 1 && (
                    <div className="how-belforce-sellers__step-connector" aria-hidden />
                  )}
                </div>
                <div className="how-belforce-sellers__step-content">
                  <div className="how-belforce-sellers__step-labels">
                    <span className="how-belforce-sellers__step-label">{step.label}</span>
                    {step.finalLabel && (
                      <span className="how-belforce-sellers__step-final-chip">{step.finalLabel}</span>
                    )}
                  </div>
                  <h3 className="how-belforce-sellers__step-title">{step.title}</h3>
                  <p className="how-belforce-sellers__step-desc">{step.description}</p>
                  {step.chips && (
                    <div className="how-belforce-sellers__step-chips">
                      {step.chips.map((chip, i) => (
                        <span
                          key={i}
                          className={`how-belforce-sellers__chip how-belforce-sellers__chip--${chip.variant}`}
                        >
                          {chip.icon === 'leaf' && (
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          )}
                          {chip.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <footer className="how-belforce-sellers__footer">
          <svg className="how-belforce-sellers__footer-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Simple, safe, and transparent — no surprises.</span>
        </footer>
      </div>

      <div className="how-belforce-sellers__cta">Simple. Secure. Hassle-free.</div>
    </div>
  );
}

export default HowBelForceWorksSellers;
