import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/main_logo.png';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Subscription Plans', to: '/membership-plans' },
  { label: 'About & Support', to: '/company-support' },
  { label: "FAQ's", to: '/faq' },
];

/** Mobile hamburger menu only — includes How it works before FAQ */
const MOBILE_NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Subscription Plans', to: '/membership-plans' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'About & Support', to: '/company-support' },
  { label: "FAQ's", to: '/faq' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/membership-plans')) return location.pathname.startsWith('/membership-plans');
    if (to.startsWith('/company-support')) return location.pathname.startsWith('/company-support');
    if (to === '/how-it-works') return location.pathname.startsWith('/how-it-works');
    if (to === '/faq') return location.pathname.startsWith('/faq');
    return location.pathname.startsWith(to);
  };

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        <img src={logoImg} alt="BelForce" className="header__logo" decoding="async" />
        <span className="header__name">BelForce</span>
        <span className="header__name header__name--mobile">BelForce</span>
      </Link>

      <nav className="header__nav" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={`header__nav-link${isLinkActive(link.to) ? ' header__nav-link--active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/membership-plans/choose-plan?plan=promax"
        className="header__btn-early-access"
        aria-label="Pre-Order Subscription Now"
      >
        Pre-Order Subscription Now
      </Link>
      <button
        type="button"
        className="header__btn-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span className="header__menu-line" />
        <span className="header__menu-line" />
        <span className="header__menu-line" />
      </button>

      {menuOpen && (
        <>
          <button
            type="button"
            className="header__mobile-overlay"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="header__mobile-dropdown"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="header__mobile-panel-header">
              <span className="header__mobile-panel-title">Menu</span>
              <button
                type="button"
                className="header__mobile-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="header__mobile-nav" aria-label="Mobile navigation links">
              {MOBILE_NAV_LINKS.map((link) => (
                <Link
                  key={`${link.to}-${link.label}`}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`header__mobile-link header__nav-link${
                    isLinkActive(link.to) ? ' header__nav-link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/membership-plans/choose-plan?plan=promax"
              className="header__mobile-cta"
              aria-label="Pre-Order Subscription Now"
              onClick={() => setMenuOpen(false)}
            >
              Pre-Order Subscription Now
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
