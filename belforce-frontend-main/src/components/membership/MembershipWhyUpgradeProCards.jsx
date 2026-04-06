function IconLightning() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
      <path
        fill="currentColor"
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23 6l-9.5 9.5-5-5L1 18"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 6h6v6"
      />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.59l-3.3-3.3 1.41-1.41 1.89 1.89 4.89-4.89 1.41 1.41-6.3 6.3z"
      />
    </svg>
  );
}

const CARDS = [
  {
    key: 'buyers',
    variant: 'mint',
    Icon: IconLightning,
    title: 'No Chasing Buyers',
    description: 'We match you with verified, serious buyers instantly.',
  },
  {
    key: 'bargaining',
    variant: 'sky',
    Icon: IconTrendingUp,
    title: 'No Endless Bargaining',
    description: 'Fair pricing models ensure you get the best value without the stress.',
  },
  {
    key: 'meetups',
    variant: 'lavender',
    Icon: IconShieldCheck,
    title: 'No Unsafe Meetups',
    description: 'Secure transactions and pickup services included.',
  },
];

function MembershipWhyUpgradeProCards() {
  return (
    <section className="membership-why-pro" aria-labelledby="membership-why-pro-heading">
      <h2 id="membership-why-pro-heading" className="membership-why-pro__title">
        Why Upgrade to Pro?
      </h2>
      <div className="membership-why-pro__cards">
        {CARDS.map(({ key, variant, Icon, title, description }) => (
          <article
            key={key}
            className={`membership-why-pro__card membership-why-pro__card--${variant}`}
          >
            <div className={`membership-why-pro__icon-wrap membership-why-pro__icon-wrap--${variant}`}>
              <Icon />
            </div>
            <div className="membership-why-pro__body">
              <h3 className="membership-why-pro__card-title">{title}</h3>
              <p className="membership-why-pro__card-desc">{description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="membership-why-pro__summary">
        Just faster deals, better pricing, and trusted transactions.
      </p>
    </section>
  );
}

export default MembershipWhyUpgradeProCards;
