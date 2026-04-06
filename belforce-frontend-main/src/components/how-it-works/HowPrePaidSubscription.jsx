const STEPS = [
  {
    number: 1,
    title: 'App Launch',
    description: 'Our app launches between April 10 - April 15, 2026.',
  },
  {
    number: 2,
    title: 'Purchase Membership',
    description: 'Purchase a membership now to lock early-access benefits — these offers may not be available after launch.',
  },
  {
    number: 3,
    title: 'Log In',
    description: 'Once the app is live, log in using your name, phone number, and membership ID.',
  },
  {
    number: 4,
    title: 'Benefits Applied',
    description: 'Your membership benefits will be automatically applied when you use BelForce services.',
  },
];

function HowPrePaidSubscription() {
  return (
    <div className="how-prepaid">
      <h2 className="how-prepaid__heading">How pre-paid subscription after Launch?</h2>

      <div className="how-prepaid__cards">
        {STEPS.map((step) => (
          <div key={step.number} className="how-prepaid__card">
            <h3 className="how-prepaid__card-title">
              <span className="how-prepaid__card-num">{step.number}.</span> {step.title}
            </h3>
            <p className="how-prepaid__card-desc">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="how-prepaid__banner">
        Enjoy great benefits<br />
        in reselling used items<br />
        only on <span className="how-prepaid__banner-brand">BelForce</span>
      </div>
    </div>
  );
}

export default HowPrePaidSubscription;
