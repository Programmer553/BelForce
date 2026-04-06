import appLaunchIcon from '../../assets/icons/app_launch.webp';
import preOrderIcon from '../../assets/icons/pre_order_now.webp';
import loginIcon from '../../assets/icons/login.webp';
import automaticBenefitsIcon from '../../assets/icons/automatic_benefits.webp';

const STEPS = [
  {
    number: 1,
    title: 'App Launch',
    description: 'Our app launches between April 10 - April 15, 2026. Get ready for a seamless experience!',
    icon: appLaunchIcon,
  },
  {
    number: 2,
    title: 'Pre-order Now',
    description: 'Purchase One-time subscription now to unlock early-access benefits — these offers may not be available after launch.',
    icon: preOrderIcon,
  },
  {
    number: 3,
    title: 'Log In',
    description: 'Once the app is live, log in using your registered name, phone number, and membership ID.',
    icon: loginIcon,
  },
  {
    number: 4,
    title: 'Automatic Benefits',
    description: 'Your membership benefits will be automatically applied when you use BelForce services.',
    icon: automaticBenefitsIcon,
  },
];

function MembershipHowItWorksWeb() {
  return (
    <section className="membership-how-web">
      <div className="membership-how-web__inner">
        <h2 className="membership-how-web__heading">How It Works</h2>
        <p className="membership-how-web__subtitle">
          You&apos;re buying our One-time Subscription service in advance — and securing long-term resale advantages.
        </p>
        <div className="membership-how-web__steps">
          {STEPS.map((step) => (
            <div key={step.number} className="membership-how-web__card">
              <div className="membership-how-web__icon-wrapper">
                <img src={step.icon} alt="" className="membership-how-web__icon" loading="lazy" decoding="async" />
              </div>
              <h3 className="membership-how-web__card-title">
                Step {step.number}: {step.title}
              </h3>
              <p className="membership-how-web__card-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipHowItWorksWeb;
