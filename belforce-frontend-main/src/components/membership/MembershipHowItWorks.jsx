const STEPS = [
  {
    number: 1,
    title: 'App Launch',
    description: 'Launches between April 10 – April 15, 2026.',
  },
  {
    number: 2,
    title: 'Purchase Membership',
    description: 'Buy now to lock early-access benefits — offers may expire.',
  },
  {
    number: 3,
    title: 'Log In',
    description: 'Use your phone number and membership ID to log in.',
  },
  {
    number: 4,
    title: 'Benefits Applied',
    description: 'Benefits automatically apply to your BelForce transactions.',
  },
];

function MembershipHowItWorks() {
  return (
    <section className="membership-how">
      <h2 className="membership-how__heading">How It Works After Launch</h2>
      <div className="membership-how__steps">
        {STEPS.map((step, index) => (
          <div key={step.number} className="membership-how__step">
            <div className="membership-how__track">
              {index > 0 ? (
                <div className="membership-how__track-line membership-how__track-line--before" aria-hidden />
              ) : (
                <div className="membership-how__track-gap" aria-hidden />
              )}
              <div className="membership-how__node">
                <span className="membership-how__node-num">{step.number}</span>
              </div>
              {index < STEPS.length - 1 ? (
                <div className="membership-how__track-line membership-how__track-line--after" aria-hidden />
              ) : (
                <div className="membership-how__track-gap" aria-hidden />
              )}
            </div>
            <div className="membership-how__card">
              <h3 className="membership-how__card-title">{step.title}</h3>
              <p className="membership-how__card-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipHowItWorks;
