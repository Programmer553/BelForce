import { Link } from 'react-router-dom';
import betterWayImg from '../../assets/images/better_way.webp';
import betterWayMobileImg from '../../assets/images/bettter_way_mobile.webp';
import tickMarkGreen from '../../assets/logo/tick_mark_green.webp';

const FEATURES = [
  'Effortless listings and fair, transparent pricing.',
  'Verified buyers for secure, worry-free transactions.',
  'Expert data wiping services for ultimate privacy.',
  'Fast payments and responsive customer support.',
];

function BetterWaySection() {
  return (
    <section className="better-way">
      {/* Desktop layout */}
      <div className="better-way__desktop">
        <div className="better-way__content">
          <div className="better-way__left">
            <h2 className="better-way__heading">There&apos;s a Better Way</h2>
            <p className="better-way__paragraph">
              BelForce simplifies the selling process, connecting you with trusted buyers and ensuring you get the best value for your devices, all while protecting your data.
            </p>
            <ul className="better-way__list">
              {FEATURES.map((feature, i) => (
                <li key={i} className="better-way__item">
                  <span className="better-way__check" aria-hidden>
                    <img src={tickMarkGreen} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="better-way__right">
            <img src={betterWayImg} alt="Better way diagram" className="better-way__img" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="better-way__mobile">
        <div className="better-way__card">
          <h2 className="better-way__card-heading">There&apos;s a Better Way</h2>
          <p className="better-way__card-paragraph">
            Try BelForce — a faster, safer, and simpler resale experience.
          </p>
          <img
            src={betterWayMobileImg}
            alt=""
            className="better-way__card-img"
            loading="lazy"
            decoding="async"
          />
          <Link to="/membership-plans/choose-plan?plan=promax" className="better-way__card-btn">
            Get Early Access Membership
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BetterWaySection;
