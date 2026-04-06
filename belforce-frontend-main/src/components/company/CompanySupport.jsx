import { useNavigate } from 'react-router-dom';
import founderImg from '../../assets/images/office_gallery/founders_photo_new.webp';
import supportLogo from '../../assets/logo/support.webp';
import phoneIcon from '../../assets/icons/phone_number.webp';
import emailIcon from '../../assets/icons/email_support.webp';
import off1 from '../../assets/images/office_gallery/off1.webp';
import off2 from '../../assets/images/office_gallery/off2.webp';
import off3 from '../../assets/images/office_gallery/off3.webp';
import off4 from '../../assets/images/office_gallery/off4.webp';
import { SUPPORT_EMAIL } from '../../constants/supportContact';

const SUPPORT_PHONE = '+918374348314';

function CompanySupport() {
  const navigate = useNavigate();
  const officeGallery = [off1, off2, off3, off4, off1, off2];

  return (
    <div className="company-support">
      <nav className="company-support__nav">
        <button
          type="button"
          className="company-support__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ‹
        </button>
        <h1 className="company-support__nav-title">Company & Support</h1>
        <span className="company-support__badge" aria-hidden>
          <img src={supportLogo} alt="" width="32" height="32" decoding="async" />
        </span>
      </nav>

      <div className="company-support__content">
        <section id="support" className="company-support__section">
          <h2 className="company-support__heading">Need Help? We&apos;re Here.</h2>
          <p className="company-support__subheading">Reach BelForce easily through the channels below</p>
          <div className="company-support__buttons">
            <a
              href={`https://wa.me/${SUPPORT_PHONE.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="company-support__btn"
            >
              <span className="company-support__btn-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  style={{ color: '#2563eb' }}
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </span>
              <span className="company-support__btn-title">WhatsApp Support</span>
              <span className="company-support__btn-desc">Quick help & updates</span>
            </a>
            <a href={`tel:${SUPPORT_PHONE}`} className="company-support__btn">
              <span className="company-support__btn-icon">
                <img src={phoneIcon} alt="" width="32" height="32" loading="lazy" decoding="async" />
              </span>
              <span className="company-support__btn-title">Call Us</span>
              <span className="company-support__btn-desc">Speak directly with our team</span>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="company-support__btn">
              <span className="company-support__btn-icon">
                <img src={emailIcon} alt="" width="32" height="32" loading="lazy" decoding="async" />
              </span>
              <span className="company-support__btn-title">Email Support</span>
              <span className="company-support__btn-desc">For detailed queries</span>
            </a>
          </div>
        </section>

        <section id="about" className="company-support__section">
          <h2 className="company-support__heading">About BelForce</h2>
          <p className="company-support__about-text">
            BelForce is a next-generation resale platform built to make buying and selling used electronics safer, faster, and more reliable. We go beyond basic listings by assisting with pricing, verified buyers, secure payments, and doorstep pickup — so resale feels professional, not risky.
          </p>
        </section>

        {/* Desktop-only extended sections */}
        <div className="company-support__desktop-extra">
          <section className="company-support__section company-support__section--founder">
            <h2 className="company-support__heading">Founder &amp; Director</h2>
            <p className="company-support__subheading company-support__subheading--founder">
              Meet the visionary behind BelForce&apos;s commitment to innovation and trust.
            </p>
            <div className="company-support__founder-banner">
              <div className="company-support__founder-banner-inner">
                <img src={founderImg} alt="J. Vishwa" className="company-support__founder-banner-img" loading="lazy" decoding="async" />
                <div className="company-support__founder-banner-content">
                  <h3 className="company-support__founder-banner-name">J. Vishwa (Jatavath Lambya)</h3>
                  <p className="company-support__founder-banner-role">Founder &amp; Director</p>
                  <p className="company-support__founder-banner-text">
                    Driven by a passion for sustainable commerce and user empowerment, J. Vishwa founded BelForce to
                    transform the way we think about pre-owned electronics. His vision is to create a seamless,
                    professional, and risk-free platform that benefits both buyers and sellers, fostering a community
                    built on trust and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="company-support__section company-support__section--status">
            <h2 className="company-support__heading">Company Status</h2>
            <p className="company-support__subheading company-support__subheading--status">
              Building BelForce transparently, responsibly, and with integrity.
            </p>
            <div className="company-support__status-card-desktop">
              <div className="company-support__status-row">
                <span className="company-support__status-label">Trademark application</span>
                <span className="company-support__status-pill company-support__status-pill--green">Submitted</span>
              </div>
              <div className="company-support__status-row">
                <span className="company-support__status-label">Legal &amp; application formalities</span>
                <span className="company-support__status-pill company-support__status-pill--orange">In Progress</span>
              </div>
              <div className="company-support__status-row company-support__status-row--last">
                <span className="company-support__status-label">Compliance checks</span>
                <span className="company-support__status-pill company-support__status-pill--green">Passed / Ongoing</span>
              </div>
              <p className="company-support__status-note company-support__status-note--desktop">
                Note: We believe in building BelForce transparently and responsibly, ensuring all foundational aspects
                are meticulously handled for a secure future.
              </p>
            </div>
          </section>

          <section className="company-support__section company-support__section--office">
            <h2 className="company-support__heading">Our Office</h2>
            <p className="company-support__subheading">
              A glimpse into the vibrant and collaborative environment where innovation thrives.
            </p>
            <div className="company-support__office-gallery-desktop">
              {officeGallery.map((src, idx) => (
                <div key={`${idx}-${src}`} className="company-support__office-thumb">
                  <img src={src} alt={`BelForce office ${idx + 1}`} className="company-support__office-thumb-img" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </section>

          <section className="company-support__section company-support__section--location-desktop">
            <h2 className="company-support__heading">Office Location</h2>
            <p className="company-support__subheading">
              Find us here, committed to serving our community.
            </p>
            <div className="company-support__location-layout">
              <div className="company-support__location-card-desktop">
                <h3 className="company-support__location-card-title">Office Location</h3>
                <p className="company-support__location-card-text">
                  Flat No. 202, 2nd Floor
                  <br />
                  Near Rice Mill
                  <br />
                  Dundigal, Gandimisamma
                  <br />
                  Hyderabad – 500043
                </p>
                <p className="company-support__location-card-text">
                  Working Hours: 9:00 AM – 9:00 PM (Monday – Saturday)
                </p>
                <p className="company-support__location-card-note">
                  Office visits by appointment only. Please contact us to schedule your visit.
                </p>
              </div>
              <div className="company-support__location-map-desktop">
                <div className="company-support__location-map-embed">
                  <iframe
                    title="BelForce Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15212.766335799053!2d78.4232899!3d17.593635050000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8edbf0acfc77%3A0x1dfb6ffd9e10ff19!2sDomara%20Pocham%20Pally%2C%20Telangana%20500043!5e0!3m2!1sen!2sin!4v1771592995855!5m2!1sen!2sin"
                    className="company-support__location-map-iframe"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="company-support__commitment-banner">
              BelForce is committed to transparency, user safety, and long-term value.
            </div>
          </section>
        </div>

        {/* Mobile-only extended sections */}
        <div className="company-support__mobile-extra">
          <section className="company-support__section">
            <h2 className="company-support__heading">Founder & Director</h2>
            <div className="company-support__founder-card">
              <img src={founderImg} alt="J. Vishwa" className="company-support__founder-img" loading="lazy" decoding="async" />
              <div className="company-support__founder-info">
                <h3 className="company-support__founder-name">J. Vishwa (Jatavath Lambya)</h3>
                <p className="company-support__founder-desc">Building BelForce with a long-term vision to fix trust and safety in resale.</p>
              </div>
            </div>
          </section>

          <section className="company-support__section">
            <h2 className="company-support__heading">Company Status</h2>
            <ul className="company-support__status-list">
              <li className="company-support__status-item">
                <span className="company-support__status-icon company-support__status-icon--hourglass" aria-hidden>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </span>
                <span>Trademark application <strong className="company-support__status-value company-support__status-value--green">submitted</strong></span>
              </li>
              <li className="company-support__status-item">
                <span className="company-support__status-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                </span>
                <span>Legal & application formalities <strong className="company-support__status-value company-support__status-value--orange">in progress</strong></span>
              </li>
              <li className="company-support__status-item">
                <span className="company-support__status-icon company-support__status-icon--check" aria-hidden>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span>Compliance checks <strong className="company-support__status-value company-support__status-value--green">passed / ongoing</strong></span>
              </li>
            </ul>
            <p className="company-support__status-note">We believe in building BelForce transparently and responsibly.</p>
          </section>

          <section className="company-support__section">
            <h2 className="company-support__heading">Our Office</h2>
            <div className="company-support__office-images">
              {officeGallery.map((src, idx) => (
                <img key={`${idx}-${src}`} src={src} alt={`BelForce office ${idx + 1}`} className="company-support__office-image" loading="lazy" decoding="async" />
              ))}
            </div>
          </section>

          <section className="company-support__section">
            <h2 className="company-support__heading">Office Location</h2>
            <div className="company-support__location-card">
              <p className="company-support__location-row">
                <span className="company-support__location-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                Flat No. 202, 2nd Floor, Near Rice Mill, Dundigal, Gandimisamma, Hyderabad – 500043
              </p>
              <p className="company-support__location-row">
                <span className="company-support__location-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </span>
                Working Hours: 9:00 AM – 9:00 PM
              </p>
            </div>
          </section>

          <section className="company-support__section">
            <h2 className="company-support__heading">Find Us</h2>
            <div className="company-support__map-wrap">
              <iframe
                title="BelForce Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15212.766335799053!2d78.4232899!3d17.593635050000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8edbf0acfc77%3A0x1dfb6ffd9e10ff19!2sDomara%20Pocham%20Pally%2C%20Telangana%20500043!5e0!3m2!1sen!2sin!4v1771592995855!5m2!1sen!2sin"
                className="company-support__map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="company-support__appointment">Office visits by appointment only.</p>
            <div className="company-support__ethos">
              <p>BelForce is committed to transparency, user safety, and long-term value.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CompanySupport;
