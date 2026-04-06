import { useState } from 'react';
import { SUPPORT_EMAIL } from '../../constants/supportContact';
import { useNavigate, Link } from 'react-router-dom';
import logoImg from '../../assets/logo/main_logo.png';
import faqsBannerImg from '../../assets/images/faqs.webp';

const FAQ_MEMBERSHIP = [
  {
    id: 'm1',
    question: 'What is BelForce Membership?',
    answer:
      'BelForce Membership gives you early access to offers, priority service, verified deals, and exclusive benefits for buying and selling used electronics.',
  },
  {
    id: 'm2',
    question: 'When is the BelForce app launching?',
    answer:
      'The BelForce app is expected to launch on X date. Membership is available before launch for a limited time.',
  },
  {
    id: 'm3',
    question: 'Will membership be available after launch?',
    answer:
      'Membership may not be available after launch, or benefits and pricing may change. Early members get maximum advantages.',
  },
  {
    id: 'm4',
    question: 'How do I purchase the membership?',
    answer:
      "You can purchase the membership through our official platform. After successful payment, you’ll receive your Membership ID.",
  },
  {
    id: 'm5',
    question: 'How do I log in after purchasing membership?',
    answer:
      'Log in using your name, registered mobile number, and Membership ID. Your benefits will activate automatically.',
  },
  {
    id: 'm6',
    question: 'What services can I use with membership?',
    answer:
      'Members get access to priority buying & selling support, verified listings, faster processing, exclusive deals, and launch offers.',
  },
  {
    id: 'm7',
    question: 'Is the membership transferable?',
    answer: 'No. Membership is linked to your mobile number and is strictly non-transferable.',
  },
  {
    id: 'm8',
    question: 'Is my payment safe and secure?',
    answer:
      'Yes. All payments are processed through secure and trusted payment gateways with full encryption.',
  },
  {
    id: 'm9',
    question: 'What if I face issues after purchasing membership?',
    answer: `Our support team is always available via WhatsApp, call, or email (${SUPPORT_EMAIL}) to help you.`,
  },
  {
    id: 'm10',
    question: 'Why should I buy membership before launch?',
    answer:
      'Early members receive more benefits at a lower cost, priority access, and offers that may not be available again.',
  },
];

const FAQ_COMPANY = [
  {
    id: 'c1',
    question: 'What is BelForce as a company?',
    answer:
      'BelForce is a resale platform focused on making used electronics buying and selling safe, fast, and reliable with assisted services.',
  },
  {
    id: 'c2',
    question: 'Who is the founder of BelForce?',
    answer:
      'BelForce is founded and directed by J. Vishwa (Jatavath Lambya) with a long-term vision to fix trust issues in resale.',
  },
  {
    id: 'c3',
    question: 'Is BelForce a registered company?',
    answer: 'Trademark and legal formalities are under process, and compliance checks are in progress as per regulations.',
  },
  {
    id: 'c4',
    question: 'Where is BelForce located?',
    answer:
      'BelForce operates from Dundigal, Gandimisamma, Hyderabad – 500043, and supports users digitally across regions.',
  },
  {
    id: 'c5',
    question: 'How can I contact BelForce support?',
    answer: `You can reach us via WhatsApp, phone call, or email at ${SUPPORT_EMAIL} during working hours (9:00 AM – 9:00 PM).`,
  },
];

function FAQ() {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq">
      <nav className="faq__nav">
        <button
          type="button"
          className="faq__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ‹
        </button>
        <Link to="/" className="faq__brand">
          <img src={logoImg} alt="BelForce" className="faq__logo" decoding="async" />
          <span className="faq__name">BelForce</span>
        </Link>
      </nav>

      <div className="faq__banner">
        <img src={faqsBannerImg} alt="" className="faq__banner-img" aria-hidden decoding="async" />
        <div className="faq__banner-overlay" />
        <div className="faq__banner-content">
          <span className="faq__banner-icon" aria-hidden>
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M6 19c0-3 2.5-5 6-5s6 2 6 5" />
            </svg>
          </span>
          <h1 className="faq__banner-title">Frequently Asked Questions</h1>
          <p className="faq__banner-subtitle">
            Everything you need to know about BelForce Membership and our platform.
          </p>
        </div>
      </div>

      <div className="faq__content">
        <div className="faq__grid">
          <section className="faq__card">
            <h2 className="faq__category-title">
              <span className="faq__category-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </span>
              BelForce Membership
            </h2>

            <div className="faq__accordion">
              {FAQ_MEMBERSHIP.map((item) => (
                <div key={item.id} className="faq__item">
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={expandedId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <span>{item.question}</span>
                    <span className={`faq__chevron ${expandedId === item.id ? 'faq__chevron--open' : ''}`} aria-hidden>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`faq__answer ${expandedId === item.id ? 'faq__answer--open' : ''}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="faq__card">
            <h2 className="faq__category-title faq__category-title--trust">
              <span className="faq__category-icon faq__category-icon--shield" aria-hidden>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </span>
              About Company & Trust
            </h2>

            <div className="faq__accordion">
              {FAQ_COMPANY.map((item) => (
                <div key={item.id} className="faq__item">
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={expandedId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <span>{item.question}</span>
                    <span className={`faq__chevron ${expandedId === item.id ? 'faq__chevron--open' : ''}`} aria-hidden>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`faq__answer ${expandedId === item.id ? 'faq__answer--open' : ''}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="faq__footer">
          <div className="faq__footer-inner">
            <div className="faq__footer-heading">
              <span className="faq__footer-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="4" width="16" height="14" rx="3" />
                  <path d="M8 11h8M8 8h5" />
                </svg>
              </span>
              <p className="faq__footer-text">Still have questions?</p>
            </div>
            <div className="faq__footer-actions">
              <a
                href="https://wa.me/918374348314"
                target="_blank"
                rel="noopener noreferrer"
                className="faq__btn-contact"
              >
                Contact Support
              </a>
              <Link to="/membership-plans" className="faq__btn-membership">
                Back to Membership Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
