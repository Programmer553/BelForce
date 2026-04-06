function MembershipProSection() {
  return (
    <section className="membership-pro">
      <div className="membership-pro__card">
        <h2 className="membership-pro__heading">Priority Access. Bigger Savings.</h2>
        <p className="membership-pro__paragraph">
          Our pre-paid membership lets early users unlock priority access and better benefits. Save time, avoid hassle, and
          get more value from every transaction. BelForce is built to make resale faster, safer, and fairer.
        </p>
        <div className="membership-pro__footer">
          <span className="membership-pro__secure-icon" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"
                fill="#22c55e"
              />
              <path
                d="M10.5 14.2 7.8 11.5l1.06-1.06 1.64 1.64 4.2-4.2 1.06 1.06-5.26 5.26z"
                fill="#ffffff"
              />
            </svg>
          </span>
          <span className="membership-pro__secure-label">SECURE PRE-ORDER</span>
        </div>
      </div>
    </section>
  );
}

export default MembershipProSection;
