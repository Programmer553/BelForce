import { Link } from 'react-router-dom';
import verifiedPlatform from '../../assets/logo/veridied_plaform.webp';
import verifiedPurchase from '../../assets/images/verified_purchase.png';
import earlyBird from '../../assets/logo/early_bird.webp';
import blueTick from '../../assets/logo/blue_tick.webp';
import appUnderDev from '../../assets/logo/app_uunder_dev.webp';
import googlePlay from '../../assets/logo/google_play.webp';
import appStore from '../../assets/logo/app_store.webp';

function EarlyAccessSection() {
  return (
    <section className="early-access">
      {/* Desktop layout */}
      <div className="early-access__desktop">
        <div className="early-access__card">
          <div className="early-access__card-header">
            <h2 className="early-access__heading">App Under Development</h2>
            <img src={appUnderDev} alt="" aria-hidden className="early-access__card-app-icon" loading="lazy" decoding="async" />
          </div>
          <hr className="early-access__card-divider" />
          <p className="early-access__card-launch">Launching Soon</p>
          <p className="early-access__card-estimate">
            Estimated launch:{' '}
            <span className="early-access__card-estimate-highlight">April 10 – April 15</span>
          </p>
          <hr className="early-access__card-estimate-divider" />
          <p className="early-access__card-warning">
            Early access memberships are limited – subscription will not be available after launch.
          </p>
          <Link to="/membership-plans" className="early-access__primary-btn">
            Secure Your Early Membership NOW →
          </Link>
          <div className="early-access__card-footer">
            <p className="early-access__card-note">
              Get pre-paid subscription now and save big later – view subscription benefits.
            </p>
            <Link to="/membership-plans" className="early-access__secondary-btn">
              Subscription Benefits
            </Link>
          </div>
        </div>

        <div className="early-access__badges-row">
          <div className="early-access__badge">
            <span className="early-access__badge-icon" aria-hidden>
              <img src={blueTick} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="early-access__badge-text">Secure Payments</span>
          </div>
          <div className="early-access__badge">
            <span className="early-access__badge-icon" aria-hidden>
              <img src={verifiedPlatform} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="early-access__badge-text">Verified Process</span>
          </div>
          <div className="early-access__badge">
            <span className="early-access__badge-icon" aria-hidden>
              <img src={earlyBird} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="early-access__badge-text">100% Trusted</span>
          </div>
        </div>
      </div>

      {/* Mobile layout - App Under Development card */}
      <div className="early-access__mobile">
        <div className="early-access__mobile-card">
          <div className="early-access__mobile-header">
            <h2 className="early-access__mobile-title">App Under Development</h2>
            <img src={appUnderDev} alt="" aria-hidden className="early-access__app-icon" loading="lazy" decoding="async" />
          </div>
          <hr className="early-access__mobile-divider" />
          <p className="early-access__mobile-launch">Launching Soon</p>
          <p className="early-access__mobile-dates">
            Estimated launch: <span className="early-access__mobile-dates-highlight">April 10 – April 15</span>
          </p>
          <p className="early-access__mobile-warning">Early access memberships are limited.</p>
          <Link to="/membership-plans" className="early-access__mobile-btn">
            Get Early Access Membership
          </Link>
          <div className="early-access__mobile-features">
            <div className="early-access__mobile-feature">
              <img src={blueTick} alt="" aria-hidden className="early-access__mobile-feature-icon early-access__mobile-feature-icon--blue" loading="lazy" decoding="async" />
              <span>Secure Payments</span>
            </div>
            <div className="early-access__mobile-feature">
              <img
                src={verifiedPurchase}
                alt=""
                aria-hidden
                className="early-access__mobile-feature-icon early-access__mobile-feature-icon--verified-purchase"
                loading="lazy"
                decoding="async"
              />
              <span>Verified Process</span>
            </div>
          </div>
        </div>

        {/* App stores coming soon card */}
        <div className="early-access__stores-card">
          <p className="early-access__stores-text">App will be available on play store & App store soon</p>
          <div className="early-access__stores-logos">
            <img src={googlePlay} alt="Google Play" className="early-access__stores-logo" loading="lazy" decoding="async" />
            <img src={appStore} alt="App Store" className="early-access__stores-logo" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarlyAccessSection;
