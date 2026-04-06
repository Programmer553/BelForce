import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants/socialLinks';
import logoImg from '../../assets/logo/main_logo.png';
import razorpayImg from '../../assets/logo/razorpay.webp';
import shieldImg from '../../assets/logo/2nd.webp';
import certifiedImg from '../../assets/logo/certified.webp';

const PRODUCT_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Membership Plans', href: '/membership-plans' },
  { label: 'Pricing', href: '/membership-plans' },
  { label: 'Video Hub', href: '/how-it-works' },
];

const SUPPORT_LINKS = [
  { label: 'Contact Support (WhatsApp)', href: 'https://wa.me/918374348314', external: true },
  { label: 'Help Center / FAQ', href: '/company-support#support' },
  { label: 'Company & Support', href: '/company-support' },
  { label: 'Report an Issue', href: '/company-support#support' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/company-support#about' },
  { label: 'Founder & Team', href: '/company-support#about' },
  { label: 'Careers', href: '/company-support#about' },
  { label: 'Press', href: '/faq' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const SUPPORT_PHONE = '+918374348314';

function Footer() {
  const [email, setEmail] = useState('');
  const [expandedProduct, setExpandedProduct] = useState(false);
  const [expandedSupport, setExpandedSupport] = useState(false);
  const [expandedCompany, setExpandedCompany] = useState(false);
  const [expandedLegal, setExpandedLegal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <hr className="footer__divider footer__divider--top" />
      <div className="footer__content">
        {/* Desktop layout */}
        <div className="footer__desktop">
        <div className="footer__upper">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <img src={logoImg} alt="" className="footer__brand-logo" aria-hidden loading="lazy" decoding="async" />
              <h3 className="footer__brand-name">BelForce</h3>
            </div>
            <p className="footer__tagline">Safer. Faster. Fairer resale.</p>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Product</h4>
            <ul className="footer__links">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Support</h4>
            <ul className="footer__links">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__links">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__newsletter">
            <h4 className="footer__column-title">Newsletter / Updates</h4>
            <p className="footer__newsletter-text">Get launch updates & offers</p>
            <form className="footer__subscribe" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer__email-input"
              />
              <button type="submit" className="footer__subscribe-btn">
                Subscribe
              </button>
            </form>
            <p className="footer__newsletter-note">We&apos;ll only send important updates.</p>
          </div>
        </div>
        <hr className="footer__divider" />
          <div className="footer__lower">
          <div className="footer__trust">
            <span className="footer__trust-label">Trust &amp; Payments:</span>
            <div className="footer__trust-items">
              <div className="footer__trust-item footer__trust-item--razorpay">
                <img src={razorpayImg} alt="Razorpay" className="footer__badge-icon" loading="lazy" decoding="async" />
                <span className="footer__trust-text">Secure payments (Razorpay)</span>
              </div>
              <div className="footer__trust-item">
                <img src={shieldImg} alt="Secure" className="footer__badge-icon" loading="lazy" decoding="async" />
                <span className="footer__trust-text">100% Trusted</span>
              </div>
              <div className="footer__trust-item">
                <img src={certifiedImg} alt="Legal &amp; certified" className="footer__badge-icon" loading="lazy" decoding="async" />
                <span className="footer__trust-text">Legal &amp; certified</span>
              </div>
            </div>
          </div>
          <div className="footer__social-row">
            <div className="footer__social-left">
              <span className="footer__social-label">Follow us :</span>
              <div className="footer__social">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <button type="button" className="footer__back-top" onClick={scrollToTop}>
              Back to top ↑
            </button>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">© 2026 BelForce. All rights reserved.</p>
            <div className="footer__bottom-links">
              {LEGAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="footer__bottom-link">
                  {link.label}
                </a>
              ))}
              <Link to="/company-support" className="footer__bottom-link footer__bottom-link--strong">
                Office Location &amp; Contact
              </Link>
            </div>
          </div>
        </div>
        </div>

        {/* Mobile layout */}
        <div className="footer__mobile">
          <div className="footer__mobile-brand">
            <div className="footer__mobile-brand-row">
              <img src={logoImg} alt="" className="footer__mobile-logo" aria-hidden decoding="async" />
              <h3 className="footer__mobile-brand-name">BelForce</h3>
            </div>
            <p className="footer__mobile-tagline">Resale is now faster, safer and smarter</p>
          </div>
          <hr className="footer__mobile-divider" />
          <div className="footer__mobile-card">
            <a href={`https://wa.me/${SUPPORT_PHONE.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="footer__mobile-btn" aria-label="WhatsApp Support">
              <svg className="footer__mobile-btn-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Whatsapp Support
            </a>
            <a href={`tel:${SUPPORT_PHONE}`} className="footer__mobile-btn" aria-label="Contact Support">
              <svg className="footer__mobile-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Contact Support
            </a>
          </div>
          <hr className="footer__mobile-divider" />
          <div className="footer__mobile-accordion">
            <button type="button" className="footer__mobile-accordion-item" onClick={() => setExpandedProduct(!expandedProduct)} aria-expanded={expandedProduct}>
              <span>Product</span>
              <svg className={`footer__mobile-chevron ${expandedProduct ? 'footer__mobile-chevron--open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedProduct && (
              <ul className="footer__mobile-accordion-links">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            )}
            <hr className="footer__mobile-accordion-divider" />
            <button type="button" className="footer__mobile-accordion-item" onClick={() => setExpandedSupport(!expandedSupport)} aria-expanded={expandedSupport}>
              <span>Support</span>
              <svg className={`footer__mobile-chevron ${expandedSupport ? 'footer__mobile-chevron--open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSupport && (
              <ul className="footer__mobile-accordion-links">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
            <hr className="footer__mobile-accordion-divider" />
            <button type="button" className="footer__mobile-accordion-item" onClick={() => setExpandedCompany(!expandedCompany)} aria-expanded={expandedCompany}>
              <span>Company</span>
              <svg className={`footer__mobile-chevron ${expandedCompany ? 'footer__mobile-chevron--open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedCompany && (
              <ul className="footer__mobile-accordion-links">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            )}
            <hr className="footer__mobile-accordion-divider" />
            <button type="button" className="footer__mobile-accordion-item" onClick={() => setExpandedLegal(!expandedLegal)} aria-expanded={expandedLegal}>
              <span>Legal & Trust</span>
              <svg className={`footer__mobile-chevron ${expandedLegal ? 'footer__mobile-chevron--open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedLegal && (
              <ul className="footer__mobile-accordion-links">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            )}
          </div>

          <hr className="footer__mobile-divider" />
          <div className="footer__mobile-newsletter">
            <h4 className="footer__mobile-newsletter-heading">Get launch updates & offers</h4>
            <form className="footer__mobile-subscribe" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer__mobile-email-input"
              />
              <button type="submit" className="footer__mobile-subscribe-btn">
                Subscribe
              </button>
            </form>
            <p className="footer__mobile-newsletter-note">We&apos;ll only send important updates.</p>
          </div>

          <hr className="footer__mobile-divider" />
          <div className="footer__mobile-trust">
            <p className="footer__mobile-trust-text">100% Trusted . secure . legal . platform</p>
            <div className="footer__mobile-badges">
              <img src={razorpayImg} alt="Razorpay" className="footer__mobile-badge-icon" loading="lazy" decoding="async" />
              <img src={shieldImg} alt="Secure" className="footer__mobile-badge-icon" loading="lazy" decoding="async" />
              <img src={certifiedImg} alt="Certified" className="footer__mobile-badge-icon" loading="lazy" decoding="async" />
            </div>
          </div>

          <hr className="footer__mobile-divider" />
          <div className="footer__mobile-social-row">
            <div className="footer__mobile-social">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer__mobile-social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="footer__mobile-social-icon" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer__mobile-social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <button type="button" className="footer__mobile-back-top" onClick={scrollToTop}>
              Back to top ↑
            </button>
          </div>

          <hr className="footer__mobile-divider" />
          <div className="footer__mobile-bottom">
            <p className="footer__mobile-copyright">© 2026 BelForce. All rights reserved.</p>
            <Link to="/company-support" className="footer__mobile-contact">Office Location & Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
