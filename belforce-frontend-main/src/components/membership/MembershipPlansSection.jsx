import { Link } from 'react-router-dom';

const PRO_BENEFITS = [
  'Priority listing visibility',
  'Lower platform fees',
  'Faster buyer matching',
  'Priority chat & support',
  'Best value to sell faster with less effort.',
];

const PRO_MAX_BENEFITS = [
  'Top priority listings & deals',
  'Zero / lowest platform fees**',
  'Maximum free pickup (up to 20 benefits*)',
  'Pro Max badge (high trust)',
  'Early access to new features',
  'Priority support',
];

function MembershipPlansSection() {
  return (
    <section className="membership-plans" id="plans">
      <h2 className="membership-plans__heading">Pre-Paid Membership Plans</h2>
      <div className="membership-plans__cards">
        <div className="membership-plans__card">
          <h3 className="membership-plans__plan-title">BelForce Pro</h3>
          <p className="membership-plans__plan-desc">For smart sellers & buyers who want faster results</p>
          <ul className="membership-plans__benefits">
            {PRO_BENEFITS.slice(0, 4).map((benefit, i) => (
              <li key={i} className="membership-plans__benefit">
                <span className="membership-plans__benefit-icon membership-plans__benefit-icon--check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                </span>
                <span className="membership-plans__benefit-text">{benefit}</span>
              </li>
            ))}
            <li className="membership-plans__benefit">
              <span className="membership-plans__benefit-icon membership-plans__benefit-icon--thumbs">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 11H4a2 2 0 00-2 2v6a2 2 0 002 2h3z" />
                </svg>
              </span>
              <span className="membership-plans__benefit-text">{PRO_BENEFITS[4]}</span>
            </li>
          </ul>
          <p className="membership-plans__price">₹599</p>
          <Link to="/membership-plans/choose-plan?plan=pro" className="membership-plans__btn">Choose Pro</Link>
        </div>

        <div className="membership-plans__card membership-plans__card--promax">
          <span className="membership-plans__badge">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Best Value • Power Users
          </span>
          <h3 className="membership-plans__plan-title">BelForce Pro Max</h3>
          <p className="membership-plans__plan-desc">For serious users who want maximum advantage</p>
          <ul className="membership-plans__benefits">
            {PRO_MAX_BENEFITS.map((benefit, i) => (
              <li key={i} className="membership-plans__benefit">
                <span className="membership-plans__benefit-icon membership-plans__benefit-icon--filled">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
                <span className="membership-plans__benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="membership-plans__power-statement">
            <span className="membership-plans__power-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
            </span>
            Built for power users. No compromises.
          </p>
          <p className="membership-plans__price">₹999</p>
          <Link to="/membership-plans/choose-plan?plan=promax" className="membership-plans__btn membership-plans__btn--promax">Choose Pro Max</Link>
        </div>

        {/* Test-only ₹1 Razorpay flow — uncomment to show dummy_plan card in UI
        <div className="membership-plans__card">
          <span className="membership-plans__badge">
            Test • ₹1
          </span>
          <h3 className="membership-plans__plan-title">Dummy Plan</h3>
          <p className="membership-plans__plan-desc">For testing the entire payment flow end-to-end</p>
          <ul className="membership-plans__benefits">
            {['Razorpay checkout', 'Backend verify + success redirect', 'Receipt email (if SMTP configured)'].map((benefit, i) => (
              <li key={i} className="membership-plans__benefit">
                <span className="membership-plans__benefit-icon membership-plans__benefit-icon--check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                </span>
                <span className="membership-plans__benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="membership-plans__price">₹1</p>
          <Link to="/membership-plans/choose-plan?plan=dummy_plan" className="membership-plans__btn">Choose Dummy Plan</Link>
        </div>
        */}
      </div>
    </section>
  );
}

export default MembershipPlansSection;
