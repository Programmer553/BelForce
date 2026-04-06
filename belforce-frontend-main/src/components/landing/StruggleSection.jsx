import lowballOffers from '../../assets/logo/lowball_offers.webp';
import truestIssues from '../../assets/logo/truest_issues.webp';
import timeConsuming from '../../assets/logo/time_consuming.webp';
import dataSecurityRisks from '../../assets/logo/data_security_risks.webp';
import limitedReach from '../../assets/logo/limited_reach.webp';
import complexProcess from '../../assets/logo/complex_proess.webp';

const CARDS = [
  { id: 'lowball', title: 'Lowball Offers', description: 'Tired of getting less than your electronics are worth?', icon: lowballOffers, highlighted: false },
  { id: 'trust', title: 'Trust Issues', description: 'Worried about scams or unreliable buyers?', icon: truestIssues, highlighted: false },
  { id: 'time', title: 'Time Consuming', description: 'Spending hours listing and negotiating?', icon: timeConsuming, highlighted: false },
  { id: 'data', title: 'Data Security Risks', description: 'Unsure if your personal data is truly erased?', icon: dataSecurityRisks, highlighted: true },
  { id: 'reach', title: 'Limited Reach', description: 'Struggling to find the right buyer locally?', icon: limitedReach, highlighted: false },
  { id: 'complex', title: 'Complex Process', description: 'Confused by complicated selling procedures?', icon: complexProcess, highlighted: false },
];

const MOBILE_PROBLEMS = [
  'Classified ads are expensive and stressful',
  'No guarantee of sale',
  'Too much bargaining & low-ball offers',
  'Fake buyers & scammers',
  'Unsafe manual meetups with strangers',
  'Zero support after listing',
];

function RedXIcon() {
  return (
    <span className="struggle__x-icon" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#D94646" />
        <path d="M6 6l8 8M14 6l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function StruggleSection() {
  return (
    <section className="struggle">
      {/* Desktop layout */}
      <div className="struggle__desktop">
        <h2 className="struggle__heading">The Current Struggle : Why Selling Used Electronics is Hard</h2>
        <div className="struggle__grid">
          {CARDS.map((card) => (
            <div key={card.id} className={`struggle__card ${card.highlighted ? 'struggle__card--highlighted' : ''}`}>
              <div className="struggle__card-icon">
                <img src={card.icon} alt={card.title} loading="lazy" decoding="async" />
              </div>
              <h3 className="struggle__card-title">{card.title}</h3>
              <p className="struggle__card-desc">{card.description}</p>
            </div>
          ))}
        </div>
        <p className="struggle__conclusion">It shouldn&apos;t be this complicated to get a fair price and peace of mind.</p>
      </div>

      {/* Mobile layout */}
      <div className="struggle__mobile">
        <div className="struggle__mobile-problem-card">
          <div className="struggle__mobile-problem-title-row">
            <span className="struggle__mobile-problem-badge" aria-hidden>
              !
            </span>
            <h2 className="struggle__mobile-problem-heading">The Problem with Classified Ads?</h2>
          </div>

          <div className="struggle__mobile-problem-categories">
            <div className="struggle__mobile-problem-category">
              <div className="struggle__mobile-problem-circle struggle__mobile-problem-circle--costly" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="struggle__mobile-problem-category-label">COSTLY ADS</div>
            </div>

            <div className="struggle__mobile-problem-category">
              <div className="struggle__mobile-problem-circle struggle__mobile-problem-circle--scammers" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l7 4v6c0 5-3 10-7 10S5 17 5 12V6l7-4z" />
                  <path d="M9.5 10.5h.01" />
                  <path d="M14.5 10.5h.01" />
                  <path d="M9 15c1.5 1 4.5 1 6 0" />
                </svg>
              </div>
              <div className="struggle__mobile-problem-category-label">SCAMMERS</div>
            </div>

            <div className="struggle__mobile-problem-category">
              <div className="struggle__mobile-problem-circle struggle__mobile-problem-circle--unsafe" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z" />
                  <path d="M12 10v5" />
                  <path d="M12 7h.01" />
                </svg>
              </div>
              <div className="struggle__mobile-problem-category-label">UNSAFE MEETUPS</div>
            </div>
          </div>

          <p className="struggle__mobile-problem-footnote">Selling shouldn't be risky.</p>
        </div>
      </div>
    </section>
  );
}

export default StruggleSection;
