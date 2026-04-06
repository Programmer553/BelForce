import React from 'react';
import unrivaledSecurity from '../../assets/logo/unrivaled_security.webp';
import speedEfficiency from '../../assets/logo/speed_efficenecy.webp';
import maximumValue from '../../assets/logo/maximum_vlue.webp';
import effortlessExperience from '../../assets/logo/effortless_experience.webp';
import blueTick from '../../assets/logo/blue_tick.webp';

const CARDS = [
  { id: 'security', title: 'Unrivaled Security', description: 'Our platform ensures your transactions are safe and your data is protected every step of the way.', icon: unrivaledSecurity, belowSecond: false },
  { id: 'speed', title: 'Speed & Efficiency', description: 'List your device, find a buyer, and get paid faster than ever before with our streamlined process.', icon: speedEfficiency, belowSecond: false },
  { id: 'value', title: 'Maximum Value', description: 'Advanced pricing algorithms guarantee you receive the best possible offer for your used electronics.', icon: maximumValue, belowSecond: false },
  { id: 'experience', title: 'Effortless Experience', description: 'From listing to payment, enjoy a smooth, simple, and stress-free selling journey.', icon: effortlessExperience, belowSecond: true },
];

const MOBILE_CARDS = [
  { id: 'safe', title: '100% Safe & Trusted', description: 'Verified buyers, assisted process, secure transactions.' },
  { id: 'price', title: 'Get the Best Possible Price', description: "We don't claim it blindly — compare and see the difference." },
  { id: 'effort', title: 'Zero Extra Effort', description: 'We list, promote, and manage everything for you.' },
  { id: 'pickup', title: 'Doorstep Pickup & Safe Payments', description: 'From pickup to payment — handled professionally.' },
];

function WhyBelForceSection() {
  return (
    <section className="why-belforce">
      {/* Desktop layout */}
      <div className="why-belforce__desktop">
        <h2 className="why-belforce__heading">Why BelForce is Your Best Choice</h2>
        <div className="why-belforce__grid">
          {CARDS.map((card) => (
            <div key={card.id} className={`why-belforce__card ${card.belowSecond ? 'why-belforce__card--below-second' : ''}`}>
              <div className="why-belforce__card-icon">
                <img src={card.icon} alt={card.title} loading="lazy" decoding="async" />
              </div>
              <h3 className="why-belforce__card-title">{card.title}</h3>
              <p className="why-belforce__card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="why-belforce__mobile">
        <h2 className="why-belforce__mobile-heading">Why BelForce?</h2>
        <div className="why-belforce__mobile-list">
          <div className="why-belforce__mobile-track">
            {[...MOBILE_CARDS, ...MOBILE_CARDS].map((card, idx) => (
              <div key={`${card.id}-${idx}`} className="why-belforce__mobile-card">
                <div className="why-belforce__mobile-icon">
                  <img src={blueTick} alt="" aria-hidden loading="lazy" decoding="async" />
                </div>
                <div className="why-belforce__mobile-content">
                  <h3 className="why-belforce__mobile-title">{card.title}</h3>
                  <p className="why-belforce__mobile-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBelForceSection;
