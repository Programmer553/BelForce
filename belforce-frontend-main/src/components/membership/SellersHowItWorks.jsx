import loginIcon from '../../assets/icons/login.webp';
import selectItemIcon from '../../assets/icons/select_item.webp';
import instantIcon from '../../assets/icons/instant.webp';
import confirmPickupIcon from '../../assets/icons/confirm_pickup.webp';
import pickupDepositIcon from '../../assets/icons/pickup_deposit.webp';
import payoutIcon from '../../assets/icons/payout.webp';
import fastPayoutIcon from '../../assets/icons/fast_payout.webp';
import mobileImg from '../../assets/images/mobile.webp';

const STEPS = [
  {
    number: 1,
    title: 'Login',
    description: 'Sign in with your name and phone number.',
    icon: loginIcon,
  },
  {
    number: 2,
    title: 'Select Item',
    description: 'Choose Mobile, Laptop, or Other and enter basic details.',
    icon: selectItemIcon,
  },
  {
    number: 3,
    title: 'Instant Price Suggestion',
    description: 'We provide an automatic competitive price (probable best price).',
    icon: instantIcon,
  },
  {
    number: 4,
    title: 'Confirm Pickup',
    description: 'Agree to the price and book a pickup (Pre-order members: free pickup; normal users: paid pickup).',
    icon: confirmPickupIcon,
  },
  {
    number: 5,
    title: 'Pickup & Deposit',
    description: 'We collect the item and verify condition; payout processed in 3-5 working days.',
    icon: pickupDepositIcon,
  },
  {
    number: 6,
    title: 'Payout to Wallet',
    description: 'Funds appear in your in-app wallet; withdraw easily to UPI or bank.',
    icon: payoutIcon,
  },
];

function SellersHowItWorks() {
  return (
    <section className="sellers-how-it-works">
      <div className="sellers-how-it-works__container">
        <div className="sellers-how-it-works__left">
          <h2 className="sellers-how-it-works__heading">How BelForce App Works — Sellers</h2>
          <p className="sellers-how-it-works__subtitle">
            Sell quickly, safely, and get paid — here&apos;s how.
          </p>
          <div className="sellers-how-it-works__steps">
            {STEPS.map((step) => (
              <div key={step.number} className="sellers-how-it-works__step">
                <div className="sellers-how-it-works__step-number">{step.number}</div>
                <div className="sellers-how-it-works__step-icon-wrapper">
                  <img src={step.icon} alt="" className="sellers-how-it-works__step-icon" loading="lazy" decoding="async" />
                </div>
                <div className="sellers-how-it-works__step-content">
                  <h3 className="sellers-how-it-works__step-title">{step.title}</h3>
                  <p className="sellers-how-it-works__step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sellers-how-it-works__right">
          <div className="sellers-how-it-works__benefit-card sellers-how-it-works__benefit-card--subscription">
            <div className="sellers-how-it-works__benefit-tag">Subscription Benefit</div>
            <div className="sellers-how-it-works__benefit-crown">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="sellers-how-it-works__benefit-title">Pre-order Members</h3>
            <p className="sellers-how-it-works__benefit-text">
              Enjoy <span className="sellers-how-it-works__benefit-highlight">FREE pickup</span> on all items. Join our elite circle and maximize your profit.
            </p>
          </div>
          <div className="sellers-how-it-works__mobile-wrapper">
            <img src={mobileImg} alt="BelForce mobile app" className="sellers-how-it-works__mobile-img" loading="lazy" decoding="async" />
          </div>
          <div className="sellers-how-it-works__benefit-card sellers-how-it-works__benefit-card--payout">
            <div className="sellers-how-it-works__payout-icon-wrapper">
              <img src={fastPayoutIcon} alt="" className="sellers-how-it-works__payout-icon" loading="lazy" decoding="async" />
            </div>
            <div className="sellers-how-it-works__payout-content">
              <h3 className="sellers-how-it-works__benefit-title">Fast Payouts</h3>
              <p className="sellers-how-it-works__benefit-text">
                Verified payments processed within <span className="sellers-how-it-works__benefit-highlight--green">3-5 working days</span> directly to your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sellers-how-it-works__footer">
        <svg className="sellers-how-it-works__footer-check" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <span className="sellers-how-it-works__footer-text">
          Simple, safe, and transparent — no surprises.
        </span>
      </div>
    </section>
  );
}

export default SellersHowItWorks;
